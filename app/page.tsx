import type { Metadata } from "next";
import Link from "next/link";
import PlansGrid from "../components/PlansGrid";

export const metadata: Metadata = {
  title: "GoDo LLC | Home Preventative Maintenance | SF Bay Area & San Joaquin Valley",
  description:
    "Stop reacting to home emergencies. GoDo LLC is your licensed preventative maintenance partner — inspecting, protecting, and documenting your home's systems before they fail. CSLB #1148177.",
};

const valueProps = [
  {
    image: "/images/card-systems.jpg",
    alt: "Water heater inspection and service",
    title: "Every System. One Partner.",
    body: "HVAC, plumbing, electrical, safety systems — we inspect and document them all. You get one report, one relationship, and zero coordination headaches.",
  },
  {
    image: "/images/card-documented.jpg",
    alt: "Finished bathroom enclosure documented after service",
    title: "Documented Every Visit.",
    body: "After each visit you get a Home Health Report with photos. Your full maintenance history lives in a Digital Home Vault — and it transfers to the next owner at resale.",
  },
  {
    image: "/images/card-proactive.jpg",
    alt: "A small foundation crack caught early",
    title: "Proactive, Not Reactive.",
    body: "We catch small problems before they become expensive failures. No scare tactics, no pressure — just honest findings and a plan to keep your home healthy.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center py-16 lg:py-24">
            <div>
              <p className="text-orange font-body font-bold tracking-widest uppercase text-sm mb-4">
                Whole-Home Preventative Maintenance
              </p>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                Stop reacting to home emergencies. Start preventing them.
              </h1>
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
                GoDo LLC is your licensed preventative maintenance partner — we inspect, protect, and
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

            {/* Hero image + floating badge */}
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero.jpg"
                alt="GoDo team member on a Central Valley job site"
                className="block w-full h-80 sm:h-[420px] lg:h-[480px] object-cover rounded-3xl"
                style={{ objectPosition: "50% 32%" }}
              />
              <div className="absolute -left-3 sm:-left-5 -bottom-5 bg-white text-navy rounded-2xl p-4 pr-5 shadow-2xl flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 3l8 3v6c0 4.5-3.2 8-8 9.5C7.2 20 4 16.5 4 12V6l8-3Z"
                      stroke="#E84F2E"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 12l2.2 2.2L15.5 9.5"
                      stroke="#E84F2E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-display font-bold text-lg leading-none">Licensed &amp; Insured</div>
                  <div className="text-xs text-navy/60 font-semibold mt-1">CSLB #1148177</div>
                </div>
              </div>
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
      <section className="bg-light-gray">
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
              <div
                key={prop.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={prop.image}
                  alt={prop.alt}
                  className="block w-full h-56 object-cover"
                />
                <div className="p-8">
                  <h3 className="font-display font-bold text-xl text-navy mb-3">{prop.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{prop.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="bg-white">
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
          <PlansGrid />
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

      {/* Entry offer / CTA strip with photo */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-10 lg:gap-12 items-center py-16 lg:py-20">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">
                Start with a 10-Point Home Health Checkup.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
                A thorough, no-pressure inspection of your home&apos;s most important systems. Honest
                findings, a clear report, and a plan — whether or not you become a member.
              </p>
              <Link
                href="/request"
                className="inline-block bg-orange hover:bg-orange-dark text-white font-body font-bold text-base px-8 py-4 rounded-full transition-colors shadow-lg"
              >
                Book Your Checkup
              </Link>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/cta-tech.jpg"
              alt="A GoDo technician on the job with a full tool belt"
              className="block w-full h-64 sm:h-80 object-cover rounded-2xl"
              style={{ objectPosition: "50% 22%" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
