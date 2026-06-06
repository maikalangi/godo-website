import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request Received",
  description: "Thank you for contacting GoDo LLC. We'll be in touch within 1 business day.",
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-light-gray">
      <div className="max-w-xl w-full text-center">
        {/* Check icon */}
        <div className="w-20 h-20 rounded-full bg-orange flex items-center justify-center mx-auto mb-8">
          <svg width="36" height="36" fill="none" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 18l7 7L28 11" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="font-display font-bold text-4xl text-navy mb-4">
          We got it. Thank you!
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Your request has been received. A GoDo team member will reach out within{" "}
          <strong className="text-navy">1 business day</strong> to confirm your visit and answer any questions.
        </p>

        {/* Next steps */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 text-left mb-8">
          <h2 className="font-display font-semibold text-navy text-lg mb-4">What happens next</h2>
          <ol className="space-y-3">
            {[
              "We review your request and confirm availability in your area.",
              "A GoDo team member contacts you via your preferred method.",
              "We schedule your visit at a time that works for you.",
              "Your licensed technician arrives, inspects, and leaves you with your Home Health Report.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="shrink-0 w-6 h-6 rounded-full bg-orange flex items-center justify-center text-white text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-navy hover:bg-navy/90 text-white font-body font-bold text-sm px-7 py-3.5 rounded-full transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-body font-bold text-sm px-7 py-3.5 rounded-full transition-colors"
          >
            Learn About Our Services
          </Link>
        </div>

        <p className="mt-8 text-gray-400 text-xs">
          Questions in the meantime?{" "}
          <a href="mailto:contact@godollc.com" className="text-orange hover:underline">
            contact@godollc.com
          </a>
          {" "}· CSLB #1148177
        </p>
      </div>
    </section>
  );
}
