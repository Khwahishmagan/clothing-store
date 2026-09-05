"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="group relative overflow-hidden rounded-2xl bg-sand">
        <Link
          href={`/products/${product.slug}`}
          className="block aspect-[4/5]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[1]}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </Link>
        {product.badge && (
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
              product.badge === "Sale"
                ? "bg-accent text-cream"
                : "bg-cream/90 text-ink"
            }`}            >
              {product.badge}
            </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium">
          {product.colors.length} colors
        </span>
        <div className="absolute inset-x-4 bottom-4 translate-y-3 rounded-xl bg-cream/95 p-2 opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            href={`/products/${product.slug}`}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-ink py-2.5 text-sm font-semibold text-cream transition hover:bg-accent-dark"
          >
            View Product <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <Link
            href={`/products/${product.slug}`}
            className="font-medium hover:text-accent"
          >
            {product.name}
          </Link>
          <p className="mt-0.5 text-sm text-ink/50">{product.category}</p>
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
    </motion.article>
  );
}
