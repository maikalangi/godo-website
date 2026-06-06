import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about GoDo LLC — a licensed, family-run preventative home maintenance company serving the SF Bay Area and San Joaquin Valley. Founded by Siu'ea and Maika Langi. CSLB #1148177.",
};

const serviceAreas = [
  { region: "SF Peninsula & South Bay", cities: "San Francisco, Sunnyvale, Los Gatos, Cupertino" },
  { region: "Tri-Valley", cities: "Dublin, Pleasanton, Livermore" },
  { region: "San Joaquin Valley", cities: "Manteca, Stockton, Tracy, Lathrop, Ripon" },
];

const values = [
  {
    title: "Proactive Over Reactive",
    body: "We believe the best home repair is the one that never has to happen. That's why we show up before problems become emergencies.",
  },
  {
    title: "Honest, Always",
    body: "We tell you what we find — nothing more, nothing less. No scare tactics, no inflated urgency. You deserve the truth about your home.",
  },
  {
    title: "Documentation Is Protection",
    body: "A properly documented home protects you from contractors, insurance disputes, and surprises at resale. We document everything.",
  },
  {
    title: "One Relationship, Every System",
    body: "You shouldn't need five different contractors to maintain your home. GoDo covers every major system so you have one trusted partner.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange font-body font-semibold text-sm tracking-widest uppercase mb-3">
            Our Story
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-5">
            Built by people who believe in taking care of things.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            GoDo was founded by a licensed technician and a business operator who were tired of watching homeowners
            get blindsided by avoidable repairs. There had to be a better way.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-navy text-center mb-12">Meet the founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Siu'ea */}
            <div className="bg-light-gray rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-orange flex items-center justify-center text-white font-display font-bold text-2xl mb-5">
                S
              </div>
              <h3 className="font-display font-bold text-xl text-navy mb-1">Siu&apos;ea Langi</h3>
              <p className="text-orange font-body font-semibold text-sm mb-4">Founder &amp; Lead Technician</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Siu&apos;ea is the licensed muscle behind GoDo — a California General B Contractor with years of
                hands-on experience across HVAC, plumbing, electrical, and structural systems. He leads every
                inspection with the same care he gives his own home: thorough, documented, and honest.
              </p>
              <p className="mt-3 text-gray-400 text-xs">California General B Contractor · CSLB #1148177</p>
            </div>

            {/* Maika */}
            <div className="bg-light-gray rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center text-white font-display font-bold text-2xl mb-5">
                M
              </div>
              <h3 className="font-display font-bold text-xl text-navy mb-1">Maika Langi</h3>
              <p className="text-orange font-body font-semibold text-sm mb-4">CEO &amp; Administrator</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maika runs GoDo&apos;s operations, digital systems, and client experience. Her background spans
                technical operations, digital marketing, and business administration — she makes sure every
                client interaction is smooth, every process is documented, and the business runs the way it
                should.
              </p>
              <p className="mt-3 text-gray-400 text-xs">Operations · Digital Marketing · Business Administration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 px-4 bg-light-gray">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-navy mb-3">What we believe</h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              These aren&apos;t talking points — they&apos;re the principles that shape every visit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-gray-100">
                <h3 className="font-display font-bold text-lg text-navy mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-navy mb-3">Where we work</h2>
            <p className="text-gray-500 text-base">
              GoDo serves homeowners across Northern California&apos;s two major metro regions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <div key={area.region} className="bg-navy rounded-2xl p-7 text-white">
                <h3 className="font-display font-semibold text-lg text-white mb-2">{area.region}</h3>
                <p className="text-white/60 text-sm">{area.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* License + Trust */}
      <section className="py-14 px-4 bg-orange text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
            Licensed. Insured. Accountable.
          </h2>
          <p className="text-white/85 text-base mb-6 max-w-xl mx-auto">
            California General B Contractor License CSLB #1148177. General Liability Insured through Farmers Insurance.
            Every job backed by our 30-Day Workmanship Warranty.
          </p>
          <Link
            href="/request"
            className="inline-block bg-white hover:bg-light-gray text-navy font-body font-bold text-base px-10 py-4 rounded-full transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </>
  );
}
