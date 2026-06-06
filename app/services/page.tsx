import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore GoDo LLC's preventative home maintenance plans — Essential, Comprehensive, and Peace of Mind Premium. All plans include life-safety checks, HVAC & plumbing inspections, and your Home Health Report.",
};

const tiers = [
  {
    id: "essential",
    name: "Essential Plan",
    cadence: "1 Annual Visit",
    description:
      "One thorough visit a year. GoDo reviews every covered system in your home, photographs findings, and delivers your Home Health Report. For homeowners who want expert eyes on their property — at least once a year.",
    includes: [
      "Life-safety system checks (smoke detectors, CO detectors, fire extinguisher status)",
      "HVAC system inspection (filters, airflow, visible components)",
      "Plumbing inspection (water heater, valves, fixtures, signs of leaks)",
      "Electrical system review (panel, outlets, GFCI)",
      "Interior & exterior visual walkthrough",
      "Home Health Report with photos after every visit",
      "Member repair discounts on additional services",
      "Digital Home Vault — full visit history, searchable and transferable at resale",
    ],
  },
  {
    id: "comprehensive",
    name: "Comprehensive Plan",
    cadence: "2 Seasonal Visits (Spring + Fall)",
    description:
      "Two visits a year aligned with seasonal transitions — when your home's systems are under the most stress. Our most popular plan for homeowners who want to stay proactive without the worry of constant scheduling.",
    includes: [
      "Everything in Essential, plus:",
      "Spring visit — post-winter inspection, cooling system prep, exterior assessment after wet season",
      "Fall visit — heating system check, weatherization review, storm prep",
      "Priority scheduling — members scheduled first",
      "Home Health Report after each visit (2 reports/year)",
      "Seasonal system recommendations and service reminders",
      "Digital Home Vault — complete bi-annual history",
      "Member repair discounts and preferred scheduling windows",
    ],
  },
  {
    id: "premium",
    name: "Peace of Mind Premium",
    cadence: "4 Quarterly Visits",
    description:
      "Quarterly attention from your GoDo technician. Nothing gets missed. Everything gets documented. The top-tier plan for homeowners who want maximum protection and concierge-level service.",
    includes: [
      "Everything in Comprehensive, plus:",
      "4 quarterly visits (every 3 months)",
      "Concierge priority scheduling — your visits are confirmed before the queue opens",
      "Dedicated account management — one point of contact, always",
      "Expanded inspection scope including appliances and outdoor systems",
      "First access to new add-on services",
      "Home Health Reports after each visit (4 reports/year)",
      "Full Digital Home Vault with quarterly trending data",
    ],
  },
];

const addOns = [
  {
    name: "Gutter Cleaning",
    description: "Clear debris, flush downspouts, inspect for damage. Recommended 1–2x per year.",
  },
  {
    name: "Window Cleaning",
    description: "Interior and exterior professional window cleaning.",
  },
  {
    name: "Power Washing",
    description: "Driveways, patios, siding, and exterior surfaces.",
  },
  {
    name: "Air Quality Testing",
    description: "Indoor air quality assessment for pollutants, humidity, and particulates.",
  },
  {
    name: "Water Quality Testing",
    description: "Test your tap water for common contaminants and minerals.",
  },
  {
    name: "Appliance Care Package",
    description: "Deep inspection and maintenance of major home appliances.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange font-body font-semibold text-sm tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-5">
            Home maintenance — finally done right.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            GoDo provides recurring, preventative maintenance for every major system in your home.
            We show up, we inspect, we document — so you never have to wonder what&apos;s happening
            inside your walls.
          </p>
        </div>
      </section>

      {/* Tier Sections */}
      {tiers.map((tier, idx) => (
        <section
          key={tier.id}
          id={tier.id}
          className={`py-16 md:py-20 px-4 ${idx % 2 === 0 ? "bg-white" : "bg-light-gray"}`}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-orange font-body font-semibold text-sm tracking-widest uppercase mb-2">
                {tier.cadence}
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-5">
                {tier.name}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">{tier.description}</p>
              <Link
                href="/request"
                className="inline-block bg-orange hover:bg-orange-dark text-white font-body font-bold text-sm px-7 py-3.5 rounded-full transition-colors"
              >
                Request This Plan
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
              <h3 className="font-display font-semibold text-navy text-lg mb-5">
                What&apos;s included
              </h3>
              <ul className="space-y-3">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <svg className="mt-0.5 shrink-0" width="18" height="18" fill="#E84F2E" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Add-ons */}
      <section className="py-16 md:py-20 px-4 bg-navy text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange font-body font-semibold text-sm tracking-widest uppercase mb-3">
              Member Add-Ons
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Go further with optional services
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto">
              Available to GoDo members at discounted rates. Just ask at booking or request an add-on at any time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {addOns.map((addon) => (
              <div key={addon.name} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <h3 className="font-display font-semibold text-white text-lg mb-2">{addon.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust + CTA */}
      <section className="py-16 px-4 bg-light-gray text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-navy font-body text-sm mb-2 font-semibold">
            California General B Contractor · CSLB #1148177 · General Liability Insured
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">
            30-Day Workmanship Warranty on all services.
          </h2>
          <p className="text-gray-600 text-base mb-8">
            No pressure. No scare tactics. Honest findings, always.
          </p>
          <Link
            href="/request"
            className="inline-block bg-orange hover:bg-orange-dark text-white font-body font-bold text-base px-10 py-4 rounded-full transition-colors"
          >
            Request a Visit
          </Link>
        </div>
      </section>
    </>
  );
}
