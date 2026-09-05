"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/products";

type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  images: [string, string];
  colors: { name: string; hex: string }[];
  sizes: string[];
  badge?: "New" | "Sale" | "Bestseller";
};

export function QuickAddCard({ product }: { product: Product }) {
  return (
    <div className="relative">
      <Link
        href={`/products/${product.slug}`}
        className="group block overflow-hidden rounded-2xl bg-sand"
      >
        <div className="relative aspect-[4/5]">
          <motion.img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <motion.img
            src={product.images[1]}
            alt=""
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          {product.badge && (
            <span
              className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                product.badge === "Sale"
                  ? "bg-accent text-cream"
                  : "bg-cream/90 text-ink"
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>
      </Link>
      <div className="absolute inset-x-4 bottom-4 translate-y-3 rounded-xl bg-cream/95 p-3 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Link
          href={`/products/${product.slug}`}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-ink py-2.5 text-sm font-semibold text-cream transition hover:bg-accent-dark"
        >
          View Product <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div>
          <Link
            href={`/products/${product.slug}`}
            className="font-medium hover:text-accent"
          >
            {product.name}
          </Link>
          <p className="mt-0.5 text-sm text-ink/50">
            {product.colors.length} colors
          </p>
        </div>
        <div className="text-right">
          <p className="font-semibold">{formatPrice(product.price)}</p>
          {product.compareAt && (
            <p className="text-sm text-ink/40 line-through">
              {formatPrice(product.compareAt)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
