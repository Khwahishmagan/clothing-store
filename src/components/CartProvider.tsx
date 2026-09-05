"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Product } from "@/lib/products";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  addItem: (product: Product, size: string, color: string, qty?: number) => void;
  removeItem: (slug: string, size: string) => void;
  setQty: (slug: string, size: string, qty: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);

  const addItem = useCallback(
    (product: Product, size: string, color: string, qty = 1) => {
      setItems((prev) => {
        const existing = prev.find(
          (i) => i.slug === product.slug && i.size === size
        );
        if (existing) {
          return prev.map((i) =>
            i === existing ? { ...i, qty: i.qty + qty } : i
          );
        }
        return [
          ...prev,
          {
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.images[0],
            size,
            color,
            qty,
          },
        ];
      });
      setOpen(true);
    },
    []
  );

  const removeItem = useCallback((slug: string, size: string) => {
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.size === size)));
  }, []);

  const setQty = useCallback(
    (slug: string, size: string, qty: number) => {
      if (qty < 1) {
        removeItem(slug, size);
        return;
      }
      setItems((prev) =>
        prev.map((i) => (i.slug === slug && i.size === size ? { ...i, qty } : i))
      );
    },
    [removeItem]
  );

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);
    return { items, count, subtotal, isOpen, setOpen, addItem, removeItem, setQty };
  }, [items, isOpen, addItem, removeItem, setQty]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
