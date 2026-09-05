import { Asterisk } from "lucide-react";

const items = [
  "Free shipping over $75",
  "New drop every Friday",
  "Ethically sourced fabrics",
  "30-day easy returns",
  "Members get 10% off",
];

export function Marquee() {
  return (
    <div className="overflow-hidden bg-ink py-3.5 text-cream">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div
            key={half}
            aria-hidden={half === 1}
            className="flex items-center gap-10"
          >
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                {item}
                <Asterisk className="h-4 w-4 text-accent" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
