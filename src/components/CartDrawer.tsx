"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";

export function CartDrawer() {
  const { items, isOpen, setOpen, subtotal, setQty, removeItem } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-cream shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
              <h2 className="font-display text-2xl">Your Bag</h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close cart"
                className="rounded-full p-2 transition hover:bg-sand"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <div className="rounded-full bg-sand p-6">
                  <ShoppingBag className="h-8 w-8 text-ink/40" />
                </div>
                <p className="text-lg font-medium">Your bag is empty</p>
                <p className="text-sm text-ink/50">
                  Add something you&apos;ll wear for years.
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-accent-dark"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <motion.div
                        key={`${item.slug}-${item.size}`}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        className="flex gap-4"
                      >
                        <div className="relative h-28 w-22 shrink-0 overflow-hidden rounded-xl bg-sand">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="88px"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between gap-2">
                            <p className="font-medium">{item.name}</p>
                            <button
                              onClick={() => removeItem(item.slug, item.size)}
                              aria-label={`Remove ${item.name}`}
                              className="text-ink/40 transition hover:text-accent"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="mt-0.5 text-sm text-ink/50">
                            {item.color} · Size {item.size}
                          </p>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center rounded-lg border border-ink/15">
                              <button
                                onClick={() => setQty(item.slug, item.size, item.qty - 1)}
                                className="p-2 hover:text-accent"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="w-8 text-center text-sm font-medium">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => setQty(item.slug, item.size, item.qty + 1)}
                                className="p-2 hover:text-accent"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <p className="font-semibold">
                              {formatPrice(item.price * item.qty)}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="border-t border-ink/10 px-6 py-6">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink/50">
                    Shipping &amp; taxes calculated at checkout.
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="mt-5 w-full rounded-full bg-ink py-4 font-semibold text-cream transition hover:bg-accent-dark"
                  >
                    Checkout — {formatPrice(subtotal)}
                  </motion.button>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-3 w-full py-2 text-sm text-ink/60 transition hover:text-ink"
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
