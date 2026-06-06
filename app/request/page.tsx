import type { Metadata } from "next";
import RequestForm from "./RequestForm";

export const metadata: Metadata = {
  title: "Request Service",
  description:
    "Request a GoDo LLC home maintenance visit. Book the 10-Point Home Health Checkup or get started with one of our membership plans. Serving the SF Bay Area and San Joaquin Valley.",
};

export default function RequestPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-orange font-body font-semibold text-sm tracking-widest uppercase mb-3">
            Let&apos;s Get Started
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-5">
            Request a visit
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Fill out the form below and we&apos;ll follow up within 1 business day to confirm your visit.
            No pressure. No commitment required.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 md:py-20 px-4 bg-light-gray">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-navy text-white rounded-2xl p-7">
              <h2 className="font-display font-semibold text-lg mb-4">What happens next?</h2>
              <ol className="space-y-4">
                {[
                  "We receive your request and review your info.",
                  "A GoDo team member contacts you within 1 business day.",
                  "We schedule your visit at a time that works for you.",
                  "Your licensed GoDo technician arrives — inspects, documents, and leaves you with your Home Health Report.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-orange flex items-center justify-center text-white text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-display font-semibold text-navy text-base mb-3">Questions?</h3>
              <p className="text-gray-600 text-sm mb-3">Reach us directly:</p>
              <a
                href="mailto:contact@godollc.com"
                className="text-orange font-body font-semibold text-sm hover:underline"
              >
                contact@godollc.com
              </a>
              <p className="text-gray-400 text-xs mt-3">
                CSLB #1148177 · Licensed & Insured · 30-Day Workmanship Warranty
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="text-navy font-body font-semibold text-sm mb-1">
                &quot;No pressure. No scare tactics.&quot;
              </p>
              <p className="text-gray-500 text-xs">
                Honest findings, always. We tell you what we find and let you decide what to do with that information.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-2">
            <RequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
