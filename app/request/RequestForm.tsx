"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RequestForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/netlify-forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        setError("Something went wrong. Please try again or email us directly at contact@godollc.com.");
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly at contact@godollc.com.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      name="service-request"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6"
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value="service-request" />
      <div hidden>
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-body font-semibold text-navy mb-1.5">
            Full Name <span className="text-orange">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-body font-semibold text-navy mb-1.5">
            Email Address <span className="text-orange">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-body font-semibold text-navy mb-1.5">
          Phone Number <span className="text-orange">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="(510) 555-0100"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition"
        />
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-body font-semibold text-navy mb-1.5">
          Property Address <span className="text-orange">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            id="address"
            name="street"
            type="text"
            required
            placeholder="Street address"
            className="sm:col-span-3 border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition"
          />
          <input
            name="city"
            type="text"
            required
            placeholder="City"
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition"
          />
          <input
            name="state"
            type="text"
            defaultValue="CA"
            placeholder="State"
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition"
          />
          <input
            name="zip"
            type="text"
            required
            placeholder="ZIP code"
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Service interest */}
      <div>
        <label htmlFor="service" className="block text-sm font-body font-semibold text-navy mb-1.5">
          I&apos;m interested in <span className="text-orange">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition appearance-none bg-white"
        >
          <option value="" disabled>Select a service…</option>
          <option value="10-Point Home Health Checkup ($89–$129)">10-Point Home Health Checkup ($89–$129)</option>
          <option value="Essential Plan (1 annual visit)">Essential Plan (1 annual visit)</option>
          <option value="Comprehensive Plan (2 seasonal visits)">Comprehensive Plan (2 seasonal visits)</option>
          <option value="Peace of Mind Premium (4 quarterly visits)">Peace of Mind Premium (4 quarterly visits)</option>
          <option value="Not sure yet — let's talk">Not sure yet — let&apos;s talk</option>
        </select>
      </div>

      {/* Contact preference */}
      <div>
        <fieldset>
          <legend className="block text-sm font-body font-semibold text-navy mb-2">
            Preferred contact method <span className="text-orange">*</span>
          </legend>
          <div className="flex flex-wrap gap-4">
            {["Phone", "Email", "Text"].map((method) => (
              <label key={method} className="flex items-center gap-2 text-sm font-body text-navy cursor-pointer">
                <input
                  type="radio"
                  name="contact_method"
                  value={method}
                  required
                  className="accent-orange"
                />
                {method}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-body font-semibold text-navy mb-1.5">
          Message / Notes <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your home, any concerns, or questions…"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition resize-none"
        />
      </div>

      {/* How did you hear */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="source" className="block text-sm font-body font-semibold text-navy mb-1.5">
            How did you hear about us? <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <select
            id="source"
            name="source"
            defaultValue=""
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition appearance-none bg-white"
          >
            <option value="">Select…</option>
            <option value="Google">Google</option>
            <option value="Referral">Referral</option>
            <option value="Door-to-door">Door-to-door</option>
            <option value="Social media">Social media</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="referral_code" className="block text-sm font-body font-semibold text-navy mb-1.5">
            Referral Code <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="referral_code"
            name="referral_code"
            type="text"
            placeholder="e.g. SMITH2024"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-orange hover:bg-orange-dark disabled:opacity-60 text-white font-body font-bold text-base px-8 py-4 rounded-full transition-colors shadow"
      >
        {submitting ? "Sending your request…" : "Send My Request"}
      </button>

      <p className="text-center text-xs text-gray-400">
        We&apos;ll respond within 1 business day. No pressure, no spam.
      </p>
    </form>
  );
}
