import Link from "next/link";

const serviceAreas = [
  "SF Peninsula",
  "South Bay",
  "Los Gatos",
  "Sunnyvale",
  "Dublin",
  "Pleasanton",
  "Livermore",
  "Manteca",
  "Stockton",
  "Tracy",
  "Lathrop",
  "Ripon",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="36" height="36" rx="6" fill="#E84F2E"/>
                <path d="M18 7L6 17H9V29H15V22H21V29H27V17H30L18 7Z" fill="white"/>
              </svg>
              <span className="text-white font-display font-bold text-xl">GoDo LLC</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-5">
              Your licensed preventative home maintenance partner — keeping your home&apos;s systems healthy, documented, and ahead of expensive failures.
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-white font-semibold">CSLB License #1148177</p>
              <p className="text-white/60">General Liability Insured</p>
              <p className="text-white/60">671 Spumante Ln, Manteca, CA 95337</p>
              <a href="mailto:contact@godollc.com" className="text-orange hover:text-white transition-colors">
                contact@godollc.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-display font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/pricing", label: "Pricing" },
                { href: "/request", label: "Request Service" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="text-white font-display font-semibold text-base mb-4">Service Areas</h3>
            <ul className="space-y-1.5 text-sm text-white/60 columns-2">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} GoDo LLC. All rights reserved.</p>
          <p>30-Day Workmanship Warranty · No pressure. Honest findings, always.</p>
        </div>
      </div>
    </footer>
  );
}
