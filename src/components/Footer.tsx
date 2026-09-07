import Link from "next/link";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "New Arrivals", href: "/shop" },
      { label: "Bestsellers", href: "/shop" },
      { label: "Sale", href: "/shop" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/" },
      { label: "Sustainability", href: "/" },
      { label: "Stores", href: "/" },
      { label: "Careers", href: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping & Returns", href: "/" },
      { label: "Size Guide", href: "/" },
      { label: "Contact", href: "/" },
      { label: "FAQ", href: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">Veil &amp; Thread</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
              Considered clothing, made in small batches from organic fabrics.
              Designed to be worn for decades, not seasons.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/15 p-2.5 transition hover:border-ink"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/15 p-2.5 transition hover:border-ink"
                aria-label="Twitter"
              >
                <XIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/15 p-2.5 transition hover:border-ink"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold uppercase tracking-wider">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink/60">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 text-xs text-ink/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Veil &amp; Thread. Demo project — not a real store.</p>
          <p>
            Built with Next.js, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
