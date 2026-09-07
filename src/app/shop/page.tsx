import { Suspense } from "react";
import ShopClient from "./ShopClient";

export const metadata = {
  title: "Shop — Veil & Thread",
  description:
    "Browse the full Veil & Thread collection: tees, outerwear, knitwear, dresses and accessories.",
};

export default function ShopPage() {
  return (
    <Suspense>
      <ShopClient />
    </Suspense>
  );
}
