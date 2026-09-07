"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto my-24 max-w-5xl overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center text-cream sm:px-12"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        Stay in the loop
      </p>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl">
        Get 10% off your first order
      </h2>
      <p className="mx-auto mt-4 max-w-md text-cream/70">
        Join the list for early access to Friday drops, restocks and
        members-only pricing.
      </p>

      {done ? (
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-full bg-accent/20 px-6 py-3 text-accent"
        >
          <Check className="h-4 w-4" /> You&apos;re on the list — check your
          inbox!
        </motion.p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setDone(true);
          }}
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-full border border-cream/20 bg-cream/10 px-5 py-3 text-cream placeholder:text-cream/40 focus:border-accent focus:outline-none"
          />
          <motion.button
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="rounded-full bg-accent px-8 py-3 font-semibold text-cream transition hover:bg-accent-dark"
          >
            Subscribe
          </motion.button>
        </form>
      )}
    </motion.section>
  );
}
