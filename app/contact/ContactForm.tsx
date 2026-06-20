"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
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
        setError("Something went wrong. Please email us directly at contact@godollc.com.");
      }
    } catch {
      setError("Something went wrong. Please email us directly at contact@godollc.com.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label>Don&apos;t fill this out: <input name="bot-field" /></label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-body font-semibold text-navy mb-1.5">
            Name <span className="text-orange">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange transition"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-body font-semibold text-navy mb-1.5">
            Email <span className="text-orange">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-body font-semibold text-navy mb-1.5">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="What&apos;s this about?"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange transition"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-body font-semibold text-navy mb-1.5">
          Message <span className="text-orange">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="How can we help you?"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm font-body text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange transition resize-none"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-orange hover:bg-orange-dark disabled:opacity-60 text-white font-body font-bold text-base px-8 py-4 rounded-full transition-colors"
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
