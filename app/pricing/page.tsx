import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare GoDo LLC's home maintenance membership plans — Essential, Comprehensive, and Peace of Mind Premium. Transparent pricing for the SF Bay Area and San Joaquin Valley.",
};

const tiers = [
  {
    name: "Essential",
    cadence: "1 Annual Visit",
    price: "Contact for Pricing",
    description: "One expert visit per year. Full inspection, photos, and your Home Health Report.",
    features: [
      "Life-safety checks",
      "HVAC, plumbing & electrical inspection",
      "Home Health Report with photos",
      "Digital Home Vault",
      "Member repair discounts",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Comprehensive",
    cadence: "2 Seasonal Visits",
    price: "Contact for Pricing",
    description: "Spring and Fall visits to keep your home ahead of seasonal wear. Our most popular plan.",
    features: [
      "Everything in Essential, plus:",
      "Spring + Fall seasonal visits",
      "Priority scheduling",
      "Seasonal system prep",
      "2 Home Health Reports/year",
      "Transferable at resale",
    ],
    highlighted: true,
    badge: "Most Popular",
    cta: "Get Started",
  },
  {
    name: "Peace of Mind Premium",
    cadence: "4 Quarterly Visits",
    price: "Contact for Pricing",
    description: "Quarterly visits with concierge scheduling. Nothing gets missed.",
    features: [
      "Everything in Comprehensive, plus:",
      "4 quarterly visits",
      "Concierge priority scheduling",
      "Dedicated account management",
      "4 Home Health Reports/year",
      "First access to new services",
    ],
    highlighted: false,
    cta: "Get Started",
  },
];

const faqs = [
  {
    q: "What's included in every plan?",
    a: "All GoDo plans include life-safety checks (smoke/CO detectors), HVAC, plumbing, and electrical inspections, a Home Health Report with photos after every visit, member repair discounts, and access to your Digital Home Vault.",
  },
  {
    q: "Can I cancel my membership?",
    a: "Yes. We don't lock you into long contracts. Contact us at contact@godollc.com and we'll handle your cancellation. If you've already had a visit that year, we may prorate depending on the plan.",
  },
  {
    q: "What if you find something during the inspection?",
    a: "We document everything in your Home Health Report and explain our findings clearly — no jargon, no scare tactics. We'll give you our honest assessment and, if you want us to fix it, you get member pricing.",
  },
  {
    q: "Do prices differ by region?",
    a: "Our Bay Area and San Joaquin Valley service areas may have different pricing due to travel and local cost factors. Contact us for a precise quote based on your address.",
  },
  {
    q: "What's the 10-Point Home Health Checkup?",
    a: "It's our entry offer — a one-time visit ($89–$129 depending on region) where we inspect your home's critical systems and give you a full report. No obligation, no pressure. Many clients convert to a membership after seeing the value.",
  },
  {
    q: "Is GoDo licensed and insured?",
    a: "Yes. GoDo LLC holds California General B Contractor license CSLB #1148177 and is fully covered by general liability insurance through Farmers Insurance (John Williams Agency). Every visit is backed by a 30-day workmanship warranty.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange font-body font-semibold text-sm tracking-widest uppercase mb-3">Membership Plans</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-5">
            Simple plans. Serious protection.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Choose the level of care that fits your home and your schedule. Every plan includes a licensed GoDo technician, a Home Health Report, and member repair discounts.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-20 px-4 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.highlighted
                    ? "bg-navy text-white shadow-2xl ring-4 ring-orange"
                    : "bg-white text-navy shadow-md"
                }`}
              >
                {tier.badge && (
                  <span className="inline-block bg-orange text-white text-xs font-body font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 self-start">
                    {tier.badge}
                  </span>
                )}
                <p className="text-orange text-xs font-body font-bold uppercase tracking-widest mb-2">
                  {tier.cadence}
                </p>
                <h2 className={`font-display font-bold text-2xl mb-1 ${tier.highlighted ? "text-white" : "text-navy"}`}>
                  {tier.name}
                </h2>
                <p className={`text-sm font-body font-semibold mb-4 ${tier.highlighted ? "text-white/60" : "text-gray-400"}`}>
                  {tier.price}
                </p>
                <p className={`text-sm leading-relaxed mb-6 ${tier.highlighted ? "text-white/70" : "text-gray-500"}`}>
                  {tier.description}
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg className="mt-0.5 shrink-0" width="16" height="16" fill="#E84F2E" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className={tier.highlighted ? "text-white/80" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/request"
                  className={`text-center font-body font-bold text-sm px-6 py-3.5 rounded-full transition-colors ${
                    tier.highlighted
                      ? "bg-orange hover:bg-orange-dark text-white"
                      : "border-2 border-navy hover:bg-navy hover:text-white text-navy"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Regional note */}
          <div className="mt-10 bg-white rounded-xl p-6 border border-gray-200 text-center max-w-2xl mx-auto">
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-navy">Regional pricing note:</strong> Prices may vary between our SF Bay Area and San Joaquin Valley service areas.
              Contact us at{" "}
              <a href="mailto:contact@godollc.com" className="text-orange underline">contact@godollc.com</a>{" "}
              for a quote specific to your address.
            </p>
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-navy text-sm font-body font-semibold">
            <span>✓ 30-Day Workmanship Warranty</span>
            <span>✓ No pressure. Honest findings, always.</span>
            <span>✓ CSLB #1148177</span>
            <span>✓ General Liability Insured</span>
          </div>
        </div>
      </section>

      {/* Entry offer */}
      <section className="py-14 px-4 bg-orange text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
            Not ready to commit? Start with the 10-Point Home Health Checkup.
          </h2>
          <p className="text-white/80 text-base mb-7">
            A one-time inspection visit — $89 to $129 depending on your area. No obligation. Full report included.
          </p>
          <Link
            href="/request"
            className="inline-block bg-white hover:bg-light-gray text-navy font-body font-bold text-base px-10 py-4 rounded-full transition-colors shadow"
          >
            Schedule Your Checkup
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-navy mb-3">Frequently asked questions</h2>
            <p className="text-gray-500 text-base">Straight answers to the questions we hear most.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-light-gray rounded-xl overflow-hidden group"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-body font-semibold text-navy text-base list-none hover:bg-gray-100 transition-colors">
                  {faq.q}
                  <svg
                    className="shrink-0 transition-transform group-open:rotate-45"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14"/>
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-block border-2 border-navy text-navy hover:bg-navy hover:text-white font-body font-bold text-sm px-7 py-3 rounded-full transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
