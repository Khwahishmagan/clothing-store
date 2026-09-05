"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/components/CartProvider";

export function ProductDetail({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const [color, setColor] = useState(product.colors[0].name);
  const [qty, setQty] = useState(1);
  const [error, setError] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    if (!size) {
      setError(true);
      return;
    }
    addItem(product, size, color, qty);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex gap-4">
            {product.images.map((image, i) => (
              <button
                key={image}
                onClick={() => setActiveImage(i)}
                aria-label={`View image ${i + 1}`}
                className={`relative aspect-[4/5] w-20 overflow-hidden rounded-lg border-2 transition ${
                  activeImage === i
                    ? "border-accent"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col"
        >
          {product.badge && (
            <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              {product.badge}
            </span>
          )}
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-ink/50">
            {product.category}
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-2xl font-semibold">
              {formatPrice(product.price)}
            </span>
            {product.compareAt && (
              <span className="text-lg text-ink/40 line-through">
                {formatPrice(product.compareAt)}
              </span>
            )}
          </div>
          <p className="mt-1 text-xs text-ink/50">
            ★ {product.rating} · {product.reviews} reviews
          </p>

          <p className="mt-6 leading-relaxed text-ink/70">
            {product.description}
          </p>

          {/* Colors */}
          <div className="mt-8">
            <p className="text-sm font-semibold">Color — {color}</p>
            <div className="mt-3 flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  title={c.name}
                  aria-label={c.name}
                  className={`h-9 w-9 rounded-full border-2 transition ${
                    color === c.name
                      ? "border-accent ring-2 ring-accent/30 ring-offset-2"
                      : "border-ink/10 hover:border-ink/40"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Size</p>
              <span className="text-xs text-ink/40">Size guide</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setSize(s);
                    setError(false);
                  }}
                  className={`min-w-14 rounded-lg border px-4 py-2.5 text-sm font-medium transition ${
                    size === s
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/15 hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {error && (
              <p className="mt-2 text-sm text-accent">Please select a size.</p>
            )}
          </div>

          {/* Qty + Add */}
          <div className="mt-8 flex gap-3">
            <div className="flex items-center rounded-lg border border-ink/15">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-3 hover:text-accent"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-medium">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="p-3 hover:text-accent"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleAdd}
              className="flex-1 rounded-lg bg-ink py-3.5 font-semibold text-cream transition hover:bg-accent-dark"
            >
              Add to Cart — {formatPrice(product.price * qty)}
            </motion.button>
          </div>

          {/* Perks */}
          <ul className="mt-8 space-y-3 border-t border-ink/10 pt-6 text-sm text-ink/70">
            <li className="flex items-center gap-3">
              <Truck className="h-4 w-4 text-accent" /> Free carbon-neutral
              shipping over $75
            </li>
            <li className="flex items-center gap-3">
              <RotateCcw className="h-4 w-4 text-accent" /> 30-day free returns
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck className="h-4 w-4 text-accent" /> Lifetime repairs
              on outerwear
            </li>
          </ul>

          {/* Details */}
          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="text-sm font-semibold">Details</p>
            <ul className="mt-3 space-y-2 text-sm text-ink/70">
              {product.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-accent">·</span> {d}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
