import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GoDo LLC. We serve the SF Bay Area and San Joaquin Valley. Email us at contact@godollc.com or fill out our contact form.",
};

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy text-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange font-body font-semibold text-sm tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-5">
            We&apos;re here when you need us.
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Questions about our plans, service areas, or scheduling? Reach out — we&apos;ll get back to you within 1 business day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-light-gray">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info sidebar */}
          <aside className="space-y-6">
            {/* Contact details */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <h2 className="font-display font-semibold text-navy text-lg mb-5">Contact Information</h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-body font-semibold text-navy mb-0.5">Email</dt>
                  <dd>
                    <a href="mailto:contact@godollc.com" className="text-orange hover:underline">
                      contact@godollc.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-body font-semibold text-navy mb-0.5">Address</dt>
                  <dd className="text-gray-600">
                    Manteca, CA 95337
                  </dd>
                </div>
                <div>
                  <dt className="font-body font-semibold text-navy mb-0.5">License</dt>
                  <dd className="text-gray-600">CSLB #1148177 · General Liability Insured</dd>
                </div>
              </dl>
            </div>

            {/* Business hours */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100">
              <h2 className="font-display font-semibold text-navy text-lg mb-5">Business Hours</h2>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  {hours.map((h) => (
                    <tr key={h.day}>
                      <td className="py-2.5 font-body font-semibold text-navy pr-4">{h.day}</td>
                      <td className="py-2.5 text-gray-600 text-right">{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-gray-400 text-xs mt-4">
                Emergency situations? Email us and we&apos;ll do our best to help.
              </p>
            </div>

            {/* Service areas */}
            <div className="bg-navy text-white rounded-2xl p-7">
              <h2 className="font-display font-semibold text-white text-lg mb-3">Service Areas</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                SF Peninsula · South Bay · Los Gatos · Sunnyvale · Dublin · Pleasanton · Livermore ·
                Manteca · Stockton · Tracy · Lathrop · Ripon
              </p>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-48 bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400 text-sm font-body">
                Map embed — add Google Maps API key to enable
              </p>
            </div>
          </aside>

          {/* Contact form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="font-display font-bold text-navy text-2xl mb-6">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
