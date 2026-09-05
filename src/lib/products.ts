export type Category =
  | "Tees"
  | "Outerwear"
  | "Knitwear"
  | "Dresses"
  | "Accessories";

export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  category: Category;
  colors: { name: string; hex: string }[];
  sizes: string[];
  images: [string, string];
  description: string;
  details: string[];
  rating: number;
  reviews: number;
  badge?: "New" | "Sale" | "Bestseller";
  featured?: boolean;
};

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories: Category[] = [
  "Tees",
  "Outerwear",
  "Knitwear",
  "Dresses",
  "Accessories",
];

export const products: Product[] = [
  {
    slug: "essential-oversized-tee",
    name: "Essential Oversized Tee",
    price: 32,
    category: "Tees",
    colors: [
      { name: "Ivory", hex: "#efe9df" },
      { name: "Charcoal", hex: "#35312d" },
      { name: "Sage", hex: "#9fae9b" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [img("1521572163474-6864f9cf17ab"), img("1618354691373-d851c5c3a990")],
    description:
      "Our best-selling tee, cut boxy through the body with a dropped shoulder and a collar that keeps its shape wash after wash.",
    details: [
      "100% GOTS-certified organic cotton, 240gsm",
      "Garment-dyed and pre-shrunk",
      "Made in Portugal in a family-run atelier",
    ],
    rating: 4.9,
    reviews: 412,
    badge: "Bestseller",
    featured: true,
  },
  {
    slug: "heavyweight-pocket-tee",
    name: "Heavyweight Pocket Tee",
    price: 38,
    category: "Tees",
    colors: [
      { name: "White", hex: "#f7f5f0" },
      { name: "Olive", hex: "#5b5a3c" },
      { name: "Navy", hex: "#2b3550" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [img("1576566588028-4147f3842f27"), img("1562157873-818bc0726f68")],
    description:
      "A structured 280gsm jersey with a patch pocket and ribbed neckline — the tee that behaves like outerwear.",
    details: [
      "280gsm heavyweight organic cotton",
      "Double-stitched hems and patch pocket",
      "Softens with every wash",
    ],
    rating: 4.8,
    reviews: 186,
    badge: "New",
    featured: true,
  },
  {
    slug: "weekend-boxy-tee",
    name: "Weekend Boxy Tee",
    price: 28,
    compareAt: 36,
    category: "Tees",
    colors: [
      { name: "Sand", hex: "#d9c7ac" },
      { name: "Black", hex: "#1f1d1b" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [img("1523381210434-271e8be1f52b"), img("1567401893414-76b7b1e5a7a5")],
    description:
      "Relaxed, slightly cropped and endlessly layerable. The one you reach for before coffee.",
    details: [
      "Slub organic cotton with lived-in texture",
      "Boxy fit, straight hem",
      "Machine wash cold, tumble low",
    ],
    rating: 4.6,
    reviews: 97,
    badge: "Sale",
  },
  {
    slug: "midnight-leather-jacket",
    name: "Midnight Leather Jacket",
    price: 248,
    category: "Outerwear",
    colors: [
      { name: "Black", hex: "#171512" },
      { name: "Espresso", hex: "#3d2c22" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [img("1551028719-00167b16eac5"), img("1525507119028-ed4c629a60a3")],
    description:
      "Full-grain lambskin, hand-finished and lined in bemberg cupro. It only gets better the more you wear it.",
    details: [
      "Full-grain lambskin from a Gold-rated tannery",
      "Antique brass hardware, bemberg lining",
      "Free repairs for life",
    ],
    rating: 4.9,
    reviews: 143,
    badge: "Bestseller",
    featured: true,
  },
  {
    slug: "windsor-wool-overcoat",
    name: "Windsor Wool Overcoat",
    price: 320,
    category: "Outerwear",
    colors: [
      { name: "Camel", hex: "#b08d57" },
      { name: "Charcoal", hex: "#3a3835" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [img("1591047139829-d91aecb6caea"), img("1485462537746-965f33f7f6a7")],
    description:
      "A single-breasted overcoat in double-faced Italian wool — sharp over tailoring, easy over denim.",
    details: [
      "80% recycled wool, 20% cashmere",
      "Woven in Biella, Italy",
      "Horn buttons and hand-set sleeves",
    ],
    rating: 4.8,
    reviews: 64,
    badge: "New",
    featured: true,
  },
  {
    slug: "heritage-denim-trucker",
    name: "Heritage Denim Trucker",
    price: 128,
    compareAt: 158,
    category: "Outerwear",
    colors: [
      { name: "Mid Wash", hex: "#4a6a8f" },
      { name: "Ecru", hex: "#e4ddcf" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [img("1516762689617-e1cffcef479d"), img("1487222477894-8943e31ef7b2")],
    description:
      "The 1962 pattern, rebuilt in rigid 13oz selvedge denim that fades exactly how you wear it.",
    details: [
      "13oz Japanese selvedge denim",
      "Copper rivets and chain-stitched hems",
      "Wear raw or wash cold inside out",
    ],
    rating: 4.7,
    reviews: 208,
    badge: "Sale",
  },
  {
    slug: "cloud-merino-crewneck",
    name: "Cloud Merino Crewneck",
    price: 96,
    category: "Knitwear",
    colors: [
      { name: "Oat", hex: "#e6dcc8" },
      { name: "Rust", hex: "#b4532a" },
      { name: "Slate", hex: "#6d7580" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [img("1434389677669-e08b4cac3105"), img("1544022613-e87ca75a784a")],
    description:
      "Featherweight 18.5-micron merino that regulates temperature year-round — warm in winter, cool in summer.",
    details: [
      "100% extra-fine merino wool, mulesing-free",
      "Fully-fashioned knit, no seams",
      "Machine washable on wool cycle",
    ],
    rating: 4.9,
    reviews: 321,
    featured: true,
  },
  {
    slug: "arctic-cable-knit",
    name: "Arctic Cable Knit",
    price: 112,
    category: "Knitwear",
    colors: [
      { name: "Cream", hex: "#f3ede1" },
      { name: "Fog", hex: "#b9bec4" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [img("1576871337622-98d48d1cf531"), img("1556905055-8f358a7a47b2")],
    description:
      "Chunky 5-gauge cables in a lambswool blend — cabin weekends, city commutes, everything between.",
    details: [
      "70% lambswool, 30% recycled nylon",
      "Hand-linked cables and ribbed trims",
      "Fits slightly oversized — size down for a neat fit",
    ],
    rating: 4.7,
    reviews: 88,
  },
  {
    slug: "sunset-slip-midi-dress",
    name: "Sunset Slip Midi Dress",
    price: 88,
    category: "Dresses",
    colors: [
      { name: "Champagne", hex: "#e8d3b4" },
      { name: "Blush", hex: "#d9a3a1" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [img("1496747611176-843222e1e57c"), img("1515372039744-b8f02a3ae446")],
    description:
      "Bias-cut cupro that skims rather than clings — dress it up with heels or down with boots.",
    details: [
      "Cupro satin with a liquid drape",
      "Adjustable straps, midi length",
      "Dry clean or gentle cold wash",
    ],
    rating: 4.8,
    reviews: 154,
    featured: true,
  },
  {
    slug: "meadow-floral-dress",
    name: "Meadow Floral Dress",
    price: 78,
    compareAt: 98,
    category: "Dresses",
    colors: [
      { name: "Meadow", hex: "#7d8c6f" },
      { name: "Ivory", hex: "#efe8d8" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [img("1509631179647-0177331693ae"), img("1515886657613-9f3515b0c78f")],
    description:
      "Hand-drawn florals on airy organic voile, with a smocked back that moves with you.",
    details: [
      "OEKO-TEX certified organic cotton voile",
      "Smocked back panel, side pockets",
      "Lined bodice",
    ],
    rating: 4.6,
    reviews: 132,
    badge: "Sale",
  },
  {
    slug: "canvas-market-tote",
    name: "Canvas Market Tote",
    price: 44,
    category: "Accessories",
    colors: [
      { name: "Natural", hex: "#d8c9ae" },
      { name: "Olive", hex: "#6b6b45" },
    ],
    sizes: ["One Size"],
    images: [img("1591561954557-26941169b49e"), img("1548036328-c9fa89d128fa")],
    description:
      "16oz waxed canvas with a reinforced base and an interior zip pocket — carries groceries, laptops and everything else.",
    details: [
      "16oz waxed organic canvas",
      "Reinforced base and boxed corners",
      "Interior zip pocket",
    ],
    rating: 4.8,
    reviews: 76,
    badge: "New",
  },
  {
    slug: "rugged-canvas-backpack",
    name: "Rugged Canvas Backpack",
    price: 98,
    category: "Accessories",
    colors: [
      { name: "Charcoal", hex: "#33312e" },
      { name: "Tan", hex: "#b5915f" },
    ],
    sizes: ["One Size"],
    images: [img("1553062407-98eeb64c6a62"), img("1511556532299-8f662fc26c06")],
    description:
      "Waxed canvas shell, vegetable-tanned leather trims and a padded 16-inch laptop sleeve. Built for the long haul.",
    details: [
      "22L capacity with padded laptop sleeve",
      "Vegetable-tanned leather accents",
      "YKK hardware throughout",
    ],
    rating: 4.7,
    reviews: 59,
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const formatPrice = (n: number) =>
  `$${n.toFixed(2)}`;

export const heroImage = img("1483985988355-763728e1935b", 1600);
export const editorialImage = img("1529139574466-a303027c1d8b", 1200);
