"use client";

import { useState } from "react";
import Link from "next/link";

type Tier = {
  name: string;
  cadence: string;
  position: string;
  description: string;
  features: string[];
  cta: string;
  badge: boolean;
};

const tiers: Tier[] = [
  {
    name: "Essential Plan",
    cadence: "1 Annual Visit",
    position: "Entry-level",
    description:
      "Get your home inspected and documented once a year. Know exactly what needs attention before it becomes an emergency.",
    features: [
      "Life-safety checks (smoke/CO detectors)",
      "HVAC, plumbing & electrical inspection",
      "Home Health Report with photos",
      "Member repair discounts",
      "Digital Home Vault",
    ],
    cta: "Get Started",
    badge: false,
  },
  {
    name: "Comprehensive Plan",
    cadence: "2 Seasonal Visits",
    position: "Most Popular",
    description:
      "Spring and Fall visits keep your home ahead of seasonal wear. Our most popular plan for proactive homeowners.",
    features: [
      "Everything in Essential, plus:",
      "Spring + Fall seasonal visits",
      "Priority scheduling",
      "Seasonal system prep",
      "Home Health Report after each visit",
      "Transferable at resale",
    ],
    cta: "Get Started",
    badge: true,
  },
  {
    name: "Peace of Mind Premium",
    cadence: "4 Quarterly Visits",
    position: "Concierge",
    description:
      "Quarterly attention. Maximum protection. For homeowners who want nothing to fall through the cracks — ever.",
    features: [
      "Everything in Comprehensive, plus:",
      "4 quarterly visits",
      "Concierge priority scheduling",
      "Air & water quality add-on option",
      "Appliance care packages",
      "Dedicated account management",
    ],
    cta: "Get Started",
    badge: false,
  },
];

// Default highlighted card = Comprehensive (index 1)
const DEFAULT_ACTIVE = 1;

export default function PlansGrid() {
  const [hovered, setHovered] = useState<number | null>(null);
  const activeIndex = hovered === null ? DEFAULT_ACTIVE : hovered;

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
      onMouseLeave={() => setHovered(null)}
    >
      {tiers.map((tier, i) => {
        const active = i === activeIndex;
        return (
          <div
            key={tier.name}
            onMouseEnter={() => setHovered(i)}
            className={`relative rounded-2xl p-8 flex flex-col h-full cursor-pointer transition-all duration-300 ease-out ${
              active
                ? "bg-navy text-white shadow-2xl lg:-translate-y-3 ring-2 ring-orange"
                : "bg-white text-navy shadow-md translate-y-0 ring-2 ring-transparent"
            }`}
          >
            {tier.badge && active && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-body font-bold tracking-wide uppercase px-4 py-1.5 rounded-full shadow">
                Most Popular
              </span>
            )}
            <p className="text-orange font-body font-bold tracking-widest uppercase text-xs mb-2">
              {tier.position}
            </p>
            <h3 className="font-display font-bold text-2xl mb-1">{tier.name}</h3>
            <p
              className={`text-sm font-semibold mb-4 transition-colors ${
                active ? "text-white/70" : "text-navy/60"
              }`}
            >
              {tier.cadence}
            </p>
            <p
              className={`text-sm leading-relaxed mb-6 transition-colors ${
                active ? "text-white/80" : "text-navy/70"
              }`}
            >
              {tier.description}
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <circle cx="10" cy="10" r="10" fill="#E84F2E" />
                    <path
                      d="M6 10.5l2.5 2.5L14 7.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={active ? "text-white/85" : "text-navy/80"}>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/request"
              className={`text-center font-body font-bold text-base px-6 py-3 rounded-full transition-colors ${
                active
                  ? "bg-orange hover:bg-orange-dark text-white"
                  : "bg-navy hover:bg-navy/90 text-white"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
