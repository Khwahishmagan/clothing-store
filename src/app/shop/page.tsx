import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function ShopPage() {
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

      <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <ProductCard key={product.slug} product={product} index={i} />
        ))}
      </div>
    </div>
  );
}
