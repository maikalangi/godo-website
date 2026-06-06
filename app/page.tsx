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
   