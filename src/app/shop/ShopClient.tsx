"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function ShopClient() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("category");
  const [category, setCategory] = useState<string>(
    initial && categories.includes(initial as never) ? initial : "All"
  );

  useEffect(() => {
    if (initial && categories.includes(initial as never)) {
      setCategory(initial);
    }
  }, [initial]);

  const filtered = useMemo(
    () =>
      category === "All"
        ? products
        : products.filter((p) => p.category === category),
    [category]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        Shop All
      </p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">The Collection</h1>
      <p className="mt-4 max-w-xl text-ink/60">
        {products.length} pieces in organic cotton, merino wool, leather and
        waxed canvas — each one built to outlast the season.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`relative rounded-full border px-5 py-2.5 text-sm font-medium transition ${
              category === c
                ? "border-ink bg-ink text-cream"
                : "border-ink/15 hover:border-ink"
            }`}
          >
            {c}
            {category === c && (
              <motion.span
                layoutId="shop-filter-pill"
                className="absolute inset-0 rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, i) => (
          <ProductCard key={product.slug} product={product} index={i} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-ink/50">
          Nothing here yet — check back soon.
        </p>
      )}
    </div>
  );
}
