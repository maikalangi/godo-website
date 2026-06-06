"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              {/* House + heart icon */}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="36" height="36" rx="6" fill="#E84F2E"/>
                <path d="M18 7L6 17H9V29H15V22H21V29H27V17H30L18 7Z" fill="white"/>
                <path d="M18 19.5C18 19.5 14 16.8 14 14.8C14 13.2 15.3 12 17 12C17.7 12 18.3 12.3 18.7 12.8L18 13.5L17.3 12.8C17.7 12.3 18.3 12 19 12C20.7 12 22 13.2 22 14.8C22 16.8 18 19.5 18 19.5Z" fill="#E84F2E"/>
              </svg>
              <div>
                <span className="text-white font-display font-bold text-xl leading-none tracking-wide">
                  GoDo
                </span>
                <span className="block text-orange text-[10px] font-body font-semibold tracking-widest uppercase">
                  LLC
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white font-body font-semibold text-sm tracking-wide transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/request"
              className="bg-orange hover:bg-orange-dark text-white font-body font-bold text-sm px-5 py-2.5 rounded-full transition-colors shadow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <div className="px-4 pt-3 pb-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white/80 hover:text-white font-body font-semibold text-base py-2.5 border-b border-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/request"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-orange hover:bg-orange-dark text-white font-body font-bold text-base px-5 py-3 rounded-full transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
