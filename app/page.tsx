import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GoDo LLC | Home Preventative Maintenance | SF Bay Area & San Joaquin Valley",
  description:
    "Stop reacting to home emergencies. GoDo LLC is your licensed preventative maintenance partner — inspecting, protecting, and documenting your home's systems before they fail. CSLB #1148177.",
};

const tiers = [
  {
    name: "Essential Plan",
    cadence: "1 Annual Visit",
    position: "Entry-level",
    description: "Get your home inspected and documented once a year. Know exactly what needs attention before it becomes an emergency.",
    features: [
      "Life-safety checks (smoke/CO detectors)",
      "HVAC, plumbing & electrical inspection",
      "Home Health Report with photos",
      "Member repair discounts",
      "Digital Home Vault",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Comprehensive Plan",
    cadence: "2 Seasonal Visits",
    position: "Most Popular",
    description: "Spring and Fall visits keep your home ahead of seasonal wear. Our most popular plan for proactive homeowners.",
    features: [
      "Everything in Essential, plus:",
      "Spring + Fall seasonal visits",
      "Priority scheduling",
      "Seasonal system prep",
      "Home Health Report after each visit",
      "Transferable at resale",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Peace of Mind Premium",
    cadence: "4 Quarterly Visits",
    position: "Concierge",
    description: "Quarterly attention. Maximum protection. For homeowners who want nothing to fall through the cracks — ever.",
    features: [
      "Everything in Comprehensive, plus:",
      "4 quarterly visits",
      "Concierge priority scheduling",
      "Air & water quality add-on option",
      "Appliance care packages",
      "Dedicated account management",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

const valueProps = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3L3 12.5V28h8v-8h10v8h8V12.5L16 3Z" stroke="#E84F2E" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 20h8" stroke="#E84F2E" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Every System. One Partner.",
    body: "HVAC, plumbing, electrical, safety systems — we inspect and document them all. You get one report, one relationship, and zero coordination headaches.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="4" width="22" height="26" rx="2" stroke="#E84F2E" strokeWidth="2"/>
        <path d="M10 12h12M10 17h12M10 22h7" stroke="#E84F2E" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Documented Every Visit.",
    body: "After each visit you get a Home Health Report with photos. Your full maintenance history lives in a Digital Home Vault — and it transfers to the next owner at resale.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3l11 4v8c0 6.5-4.5 11.5-11 14C9.5 26.5 5 21.5 5 15V7l11-4Z" stroke="#E84F2E" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M11.5 16l3 3 6-6" stroke="#E84F2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Proactive, Not Reactive.",
    body: "We catch small problems before they become expensive failures. No scare tactics, no pressure — just honest findings and a plan to keep your home healthy.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-orange font-body font-bold tracking-widest uppercase text-sm mb-4">
              Whole-Home Preventative Maintenance
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Stop reacting to home emergencies. Start preventing them.
            </h1>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              GoDo is your licensed preventative maintenance partner — we inspect, protect, and
              document your home&apos;s systems before they fail. One subscription. Every system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#plans"
                className="text-center bg-orange hover:bg-orange-dark text-white font-body font-bold text-base px-7 py-3.5 rounded-full transition-colors shadow-lg"
              >
                See Our Plans
              </Link>
              <Link
                href="/request"
                className="text-center bg-white/10 hover:bg-white/20 border border-white/30 text-white font-body font-bold text-base px-7 py-3.5 rounded-full transition-colors"
              >
                Book a Free Checkup
              </Link>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/70 font-body font-semibold text-center">
              <span>CSLB #1148177</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>Licensed &amp; Insured</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>Serving Bay Area + San Joaquin Valley</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>30-Day Workmanship Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
              Your home has a lot of systems. We keep them all healthy.
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed">
              Most home problems don&apos;t announce themselves until they&apos;re expensive. GoDo
              gets ahead of them with regular, documented care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop) => (
              <div key={prop.title} className="bg-light-gray rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm mb-5">
                  {prop.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-3">{prop.title}</h3>
                <p className="text-navy/70 leading-relaxed">{prop.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="bg-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-orange font-body font-bold tracking-widest uppercase text-sm mb-3">
              Membership Plans
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy mb-4">
              One subscription. Every system. Total peace of mind.
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed">
              Choose the level of care that fits your home. Every plan includes life-safety checks,
              system inspections, and a documented Home Health Report.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 flex flex-col h-full ${
                  tier.highlighted
                    ? "bg-navy text-white shadow-2xl lg:-translate-y-3 ring-2 ring-orange"
                    : "bg-white text-navy shadow-md"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-body font-bold tracking-wide uppercase px-4 py-1.5 rounded-full shadow">
                    Most Popular
                  </span>
                )}
                <p
                  className={`font-body font-bold tracking-widest uppercase text-xs mb-2 ${
                    tier.highlighted ? "text-orange" : "text-orange"
                  }`}
                >
                  {tier.position}
                </p>
                <h3 className="font-display font-bold text-2xl mb-1">{tier.name}</h3>
                <p className={`text-sm font-semibold mb-4 ${tier.highlighted ? "text-white/70" : "text-navy/60"}`}>
                  {tier.cadence}
                </p>
                <p className={`text-sm leading-relaxed mb-6 ${tier.highlighted ? "text-white/80" : "text-navy/70"}`}>
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
                        <path d="M6 10.5l2.5 2.5L14 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className={tier.highlighted ? "text-white/85" : "text-navy/80"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/request"
                  className={`text-center font-body font-bold text-base px-6 py-3 rounded-full transition-colors ${
                    tier.highlighted
                      ? "bg-orange hover:bg-orange-dark text-white"
                      : "bg-navy hover:bg-navy/90 text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-navy/60 text-sm mt-10">
            Not sure which plan fits?{" "}
            <Link href="/pricing" className="text-orange font-semibold hover:underline">
              Compare all plans
            </Link>{" "}
            or{" "}
            <Link href="/request" className="text-orange font-semibold hover:underline">
              book a free checkup
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Entry offer / CTA strip */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">
                Start with a 10-Point Home Health Checkup.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                A thorough, no-pressure inspection of your home&apos;s most important systems. Honest
                findings, a clear report, and a plan — whether or not you become a member.
              </p>
            </div>
            <Link
              href="/request"
              className="shrink-0 bg-orange hover:bg-orange-dark text-white font-body font-bold text-base px-8 py-4 rounded-full transition-colors shadow-lg"
            >
              Book Your Checkup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
