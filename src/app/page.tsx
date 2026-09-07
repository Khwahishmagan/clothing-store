"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Leaf,
  Recycle,
  Shirt,
  Truck,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { Newsletter } from "@/components/Newsletter";
import { categories, products } from "@/lib/products";

const heroImage =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80";

const editorialImage =
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80";

const categoryImages: Record<string, string> = {
  Tees:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  Outerwear:
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
  Knitwear:
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
  Dresses:
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
  Accessories:
    "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80",
};

const testimonials = [
  {
    quote:
      "The merino crewneck is the single most-worn item in my closet. Three winters in and it still looks new.",
    name: "Maya R.",
    detail: "Cloud Merino Crewneck",
  },
  {
    quote:
      "I ordered the leather jacket expecting good — it's exceptional. The leather broke in beautifully within weeks.",
    name: "Daniel K.",
    detail: "Midnight Leather Jacket",
  },
  {
    quote:
      "Finally tees that don't lose their shape. I've replaced my entire drawer with these.",
    name: "Priya S.",
    detail: "Essential Oversized Tee",
  },
];

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        {kicker}
      </p>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h2>
    </Reveal>
  );
}

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const newArrivals = products.filter((p) => p.badge === "New").slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage}
            alt="Model wearing the latest collection"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-xl text-cream"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs font-semibold uppercase tracking-[0.3em] text-accent"
                >
                  New Season — Autumn 2026
                </motion.p>
                <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl">
                  Worn well.
                  <br />
                  Worn often.
                </h1>
                <p className="mt-6 max-w-md text-lg text-cream/80">
                  Small-batch clothing in organic fabrics, cut to move with you
                  — from first coffee to last train.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/shop"
                      className="inline-block rounded-full bg-cream px-8 py-4 font-semibold text-ink transition hover:bg-accent hover:text-cream"
                    >
                      Shop the Collection
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/shop?category=Tees"
                      className="inline-block rounded-full border border-cream/40 px-8 py-4 font-semibold text-cream transition hover:border-cream"
                    >
                      Explore Tees
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading kicker="Browse" title="Shop by category" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, i) => (
            <Reveal key={category} delay={i * 0.06}>
              <Link
                href={`/shop?category=${encodeURIComponent(category)}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={categoryImages[category]}
                  alt={category}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-cream">
                  <span className="font-display text-2xl">{category}</span>
                  <ArrowUpRight className="h-5 w-5 opacity-0 transition group-hover:opacity-100" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-sand/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="The Edit" title="Featured this season" />
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <Link
              href="/shop"
              className="inline-block rounded-full border border-ink px-8 py-3.5 font-semibold transition hover:bg-ink hover:text-cream"
            >
              View All Products
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Editorial */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={editorialImage}
                alt="Studio craftsmanship"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Our Philosophy
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Made slowly, worn constantly
            </h2>
            <p className="mt-6 leading-relaxed text-ink/70">
              Every Veil &amp; Thread piece starts with the fabric. We work with
              a handful of family-run mills and ateliers that pay fair wages and
              waste as little as possible — then we design silhouettes
              you&apos;ll reach for in ten years, not ten weeks.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                [Leaf, "Organic fabrics", "GOTS-certified cotton, merino and cupro"],
                [Shirt, "Small batches", "Limited runs mean less waste"],
                [Recycle, "Free repairs", "We fix our outerwear for life"],
              ].map(([Icon, title, sub]) => (
                <li key={title as string} className="flex gap-4">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium">{title as string}</p>
                    <p className="text-sm text-ink/60">{sub as string}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/shop"
              className="mt-10 inline-flex items-center gap-2 font-semibold text-accent transition hover:gap-3"
            >
              Explore the collection <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* New arrivals */}
      <section id="new" className="bg-sand/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading kicker="Just Landed" title="New arrivals" />
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Perks strip */}
      <section className="border-y border-ink/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            [Truck, "Free shipping over $75", "Carbon-neutral, worldwide"],
            [Recycle, "30-day free returns", "No questions asked"],
            [Leaf, "Organic materials", "Certified and traceable"],
            [Check, "Lifetime repairs", "On all outerwear"],
          ].map(([Icon, title, sub], i) => (
            <Reveal key={title as string} delay={i * 0.06} className="flex items-start gap-4">
              <Icon className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <p className="font-medium">{title as string}</p>
                <p className="text-sm text-ink/60">{sub as string}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading kicker="Word of Mouth" title="What people say" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl bg-sand/70 p-8">
                <p className="text-accent">★★★★★</p>
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-ink/50"> · {t.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
