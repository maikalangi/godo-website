# GoDo LLC — Website Project Instructions

### Cowork Project Brief · June 2026

---

## 0\. Confirmed Decisions (Read First)

These are resolved. Do not re-litigate them in a Cowork session.

| Decision | Resolution |
| :---- | :---- |
| **Platform** | Next.js (scalable, custom-coded — not Wix) |
| **Hosting** | Netlify (already connected via MCP — deploy directly from here) |
| **Domain** | godollc.com — owned and confirmed |
| **Database** | Supabase — not needed for Phase 0, spin up before Phase 2 |
| **Payments** | Stripe only — no custom payment forms |
| **Forms (Phase 0\)** | Netlify Forms (zero-backend, built into Netlify hosting) |
| **Architecture goal** | Ship fast now on a foundation that grows — no rebuild required |

---

## 1\. About This Project

This document is the master context brief for building and evolving the GoDo LLC website. Any Claude Cowork session working on this project should read this document in full before writing any code, making design decisions, or selecting tools.

**Goal:** Build a professional, conversion-focused website for GoDo LLC that serves homeowners in the SF Bay Area and San Joaquin Valley. The site launches immediately as a polished marketing hub (so GoDo has a credible web presence for vendor lists, government bids, and referrals), then grows into a full client-facing platform with a property data portal and eventual mobile app integration — all without rebuilding.

---

## 2\. Business Context

**Company:** GoDo LLC  
**Business Model:** Subscription-based General Home Preventative Maintenance  
**Domain:** [www.godollc.com](http://www.godollc.com)  
**Email:** [contact@godollc.com](mailto:contact@godollc.com)  
**Address:** 671 Spumante Ln, Manteca, CA 95337  
**License:** California General B Contractor — CSLB \#1148177  
**Trademark:** U.S. Application Serial No. 99493597 (pending)

**Founders:**

- **Siu'ea Langi** — Founder & Lead Technician (Managing Member, license holder)  
- **Maika Langi** — CEO / Administrator (technical lead, digital marketing, operations)

**Service Areas:**

- SF Bay Area (SF Peninsula, South Bay, Los Gatos, Sunnyvale)  
- Tri-Valley (Dublin, Pleasanton, Livermore)  
- San Joaquin Valley / Manteca (Manteca, Stockton, Tracy, Lathrop, Ripon)

---

## 3\. Brand Identity

### Colors

| Name | Hex | Use |
| :---- | :---- | :---- |
| **Navy** | `#0F1F44` | Primary background, headers, footer |
| **Orange** | `#E84F2E` | CTAs, accents, highlights |
| **White** | `#FFFFFF` | Body text on dark backgrounds, cards |
| **Light Gray** | `#F5F5F5` | Page backgrounds, section breaks |

### Logo

- File: `GoDo_LLC_Logo.png` (house-with-heart icon \+ "GODO LLC" wordmark \+ "CSLB \#1148177")  
- Note: Source PNG has a \~20px white strip on the right edge — crop before embedding in tight layouts.  
- Always display CSLB \#1148177 near the logo or in the footer.

### Typography Direction

- **Display / Headers:** A strong, modern serif or geometric sans that communicates authority and trust. Not Inter, Roboto, or Arial.  
- **Body:** Clean, readable. Good contrast on both light and dark backgrounds.  
- Use Google Fonts or Adobe Fonts (self-hosted preferred for performance).

### Tone & Voice

- **Confident, not arrogant.** Use strong active language ("We protect your home," "Schedule your visit").  
- **Customer-first.** Lead with the homeowner's pain (surprise breakdowns, costly repairs) before talking features.  
- **Warm and professional.** Not corporate-cold. Not casual-sloppy.  
- **No jargon.** Write for a busy homeowner, not a contractor.

### Brand Positioning Statement (for copy reference)

GoDo is your whole-home preventative maintenance partner — a licensed expert team that keeps your home's systems healthy, documented, and ahead of expensive failures. One subscription. Every system. Proactive, not reactive.

---

## 4\. Subscription Products (What We Sell)

GoDo offers three membership tiers. **Do not invent pricing — placeholder text is fine** until Maika confirms which price points to display publicly.

| Tier | Name | Cadence | Position |
| :---- | :---- | :---- | :---- |
| **1** | Essential Plan | 1 annual visit | Entry-level / low-friction acquisition |
| **2** | Comprehensive Plan | 2 seasonal visits (Spring \+ Fall) | **Core product** — most popular |
| **3** | Peace of Mind Premium | 4 quarterly visits | Top-tier concierge |

**Key inclusions across tiers:**

- Life-safety checks (smoke/CO detectors)  
- HVAC, plumbing, electrical system inspections  
- Home Health Report with photos after every visit  
- Priority scheduling and member repair discounts  
- Digital Home Vault (maintenance history, transferable at resale)

**Add-ons** (upsells, member-discounted):

- Gutter cleaning, window cleaning, power washing  
- Air/water quality testing  
- Appliance care packages

**Entry offer:** 10-Point Home Health Checkup ($89–$129 one-time) — the primary lead capture and trial offer. Drives subscription conversion.

---

## 5\. Site Architecture & Page Map

### Phase 0 — Fast Launch *(Priority: Ship This First)*

The immediate goal is a live, professional site on godollc.com that GoDo can share on vendor lists, government bid applications, and with referral partners. No database required. No login. No Supabase yet. Just excellent static pages \+ Netlify Forms \+ Stripe.

**Phase 0 ships:**

/                     → Home (hero, value prop, tier overview, CTA)

/services             → Services (tier breakdowns, what's included, add-ons)

/pricing              → Pricing (tier comparison, FAQ, regional pricing note)

/request              → Service Request Form (Netlify Form → email to contact@godollc.com)

/about                → Who We Are (founder story, values, CSLB, service area)

/contact              → Contact info, map embed, business hours

/thank-you            → Confirmation page (post-form and post-payment)

**Phase 0 defers:**

- Stripe payment integration (add in Phase 1 — request form covers intake for now)  
- Blog / content pages  
- City-specific SEO landing pages  
- Any logged-in or portal functionality

**Definition of done for Phase 0:**

- Site is live at godollc.com via Netlify  
- All pages are mobile-responsive  
- Request form submits successfully to [contact@godollc.com](mailto:contact@godollc.com) via Netlify Forms  
- CSLB \#1148177 is visible in the footer on every page  
- No lorem ipsum anywhere  
- Passes basic Lighthouse audit (Performance \> 80, Accessibility \> 90\)

---

### Phase 1 — Full MVP (Marketing Site Complete)

Builds on Phase 0 foundation. Adds payment capability and polish.

/pay                  → Stripe checkout for 10-Point Home Health Checkup ($89–$129)

/\[city\]               → City-specific SEO landing pages (Manteca, Los Gatos, Dublin, etc.)

/blog                 → Optional content/education section (if Maika confirms)

**Every page (Phase 0 \+ 1\) must include:**

- Header with logo, nav links, and a persistent "Get Started" CTA button (orange)  
- Footer with: CSLB \#1148177, address, email, phone, service area list, copyright  
- Mobile-responsive layout (most homeowners will visit on mobile)

---

### Phase 2 — Member Portal / Home Vault *(plan now, build later)*

This phase adds a logged-in client experience. **Do not build in Phase 1**, but architect Phase 1 so these can be added without a full rebuild.

/login                → Member login

/portal               → Member dashboard

/portal/property      → Property profile (address, systems, age of equipment)

/portal/vault         → Home Vault (visit history, photos, reports, recommendations)

/portal/schedule      → Request a visit / manage upcoming visits

/portal/billing       → Subscription status, payment history, upgrade/downgrade

**Data the portal will need to store per property:**

- Property address and basic info (sq ft, year built, home type)  
- Systems inventory (HVAC brand/age, water heater brand/age, panel type, etc.)  
- Visit history (date, technician, services performed, items flagged)  
- Photo documentation (before/after, flagged issues)  
- Home Health Reports (PDF per visit)  
- Referral code and referral history

**Integration targets for Phase 2:**

- Housecall Pro (field service management — existing GoDo platform)  
- Stripe (subscription billing and payment history)  
- Email/SMS notifications (visit reminders, renewal alerts, report ready)

---

### Phase 3 — GoDo App Integration *(future vision)*

The website's client portal becomes the web-facing layer of the GoDo mobile app. In this phase:

- The portal backend exposes a REST API (or uses a shared database) that the app reads/writes to  
- Members can access their Home Vault from both the website and the app  
- Technicians log visit data via the app, which syncs to the member's portal in real time  
- Push notifications replace or supplement email/SMS

**Architecture implication:** Phase 1 should use a backend/database that can be API-exposed later. Avoid locking Phase 1 data into a platform that has no external API access (e.g., pure Wix CMS with no export path).

---

## 6\. Phase 1 — Feature Requirements (Detailed)

### 6.1 Service Request Form

The primary lead capture mechanism. Collect:

- Full name  
- Email address  
- Phone number  
- Property address (street, city, zip)  
- Service interest (dropdown: 10-Point Home Health Checkup / Essential Plan / Comprehensive Plan / Peace of Mind Premium / Not sure yet — let's talk)  
- Preferred contact method (phone / email / text)  
- Message / notes (optional)  
- How did you hear about us? (optional dropdown: Google / Referral / Door-to-door / Social media / Other)  
- Referral code field (optional — for referral program tracking)

**On submit:**

- Show /thank-you page with next steps ("We'll reach out within 1 business day")  
- Send form data to [contact@godollc.com](mailto:contact@godollc.com) (or a connected CRM/form service)  
- Optional: trigger a confirmation email to the customer

### 6.2 Payment Page

**Phase 1 scope:** Simple Stripe checkout for the 10-Point Home Health Checkup one-time payment ($89–$129 depending on region). Subscription billing can be added in Phase 1b.

- Use Stripe hosted checkout or Stripe.js embedded elements  
- Display what the customer is paying for clearly before the payment form  
- Show trust signals: CSLB \#1148177, GL insured badge, satisfaction language  
- Post-payment: redirect to /thank-you with scheduling next steps

**Do not** collect payment info via a custom HTML form. Always route through Stripe's secure elements.

### 6.3 Pricing Page

- Display the three tiers side by side (card or table format)  
- Highlight the Comprehensive Plan as "Most Popular"  
- Show regional pricing note if prices differ by service area (Bay Area vs SJC)  
- Include a FAQ section addressing: "What's included?", "Can I cancel?", "What if you miss something?"  
- Primary CTA: "Schedule Your Free Consultation" or "Get Started" → routes to /request

### 6.4 Homepage Hero

The hero section must immediately answer: **"Who is this for and why should I care?"**

Suggested hero copy framework:

- **Headline:** Stop reacting to home emergencies. Start preventing them.  
- **Sub:** GoDo is your licensed preventative maintenance partner — we inspect, protect, and document your home's systems before they fail.  
- **CTA buttons:** "See Our Plans" (scrolls to tier section) \+ "Book a Free Checkup" (→ /request)  
- **Trust bar below hero:** CSLB \#1148177 | Licensed & Insured | Serving Bay Area \+ San Joaquin Valley | 30-Day Workmanship Warranty

---

## 7\. Confirmed Tech Stack

This is the stack. Do not deviate without checking with Maika.

### Core (All Phases)

| Layer | Tool | Notes |
| :---- | :---- | :---- |
| **Framework** | Next.js (App Router) | React-based, SSR \+ static pages, excellent SEO |
| **Hosting** | Netlify | Already connected via MCP — deploy directly |
| **Styling** | Tailwind CSS | Utility-first, consistent design tokens |
| **Language** | TypeScript | Type safety from Day 1, cleaner Phase 2 integration |

### Phase 0 (No Backend Needed)

| Layer | Tool | Notes |
| :---- | :---- | :---- |
| **Forms** | Netlify Forms | Zero-config, data captured in Netlify dashboard, email notifications built-in |
| **Email notify** | Netlify Forms notifications → [contact@godollc.com](mailto:contact@godollc.com) | No extra service needed |
| **Analytics** | Google Analytics 4 | Add before launch |

### Phase 1 Add-Ons

| Layer | Tool | Notes |
| :---- | :---- | :---- |
| **Payments** | Stripe (hosted checkout or Stripe.js) | One-time payment for Home Health Checkup |
| **Subscription billing** | Stripe Billing | Add when subscription checkout is ready |

### Phase 2 Add-Ons (Database \+ Portal)

| Layer | Tool | Notes |
| :---- | :---- | :---- |
| **Database** | Supabase (PostgreSQL) | Spin up when portal build begins |
| **Auth** | Supabase Auth | Email/password \+ magic link for member login |
| **File storage** | Supabase Storage | Photos, Home Health Reports (PDFs) |
| **API** | Supabase auto-generated REST \+ GraphQL | Available immediately for Phase 3 app |

### Phase 3 Add-Ons (App Integration)

| Layer | Tool | Notes |
| :---- | :---- | :---- |
| **API layer** | Next.js API routes \+ Supabase | App reads/writes same DB as web portal |
| **Push notifications** | Expo Notifications or OneSignal | Add when mobile app is in development |

### Why This Stack Works

- **Phase 0 to launch fast:** Netlify Forms handles the request form with zero backend. No Supabase account, no API keys, no database setup required for the first Cowork session.  
- **No rebuild:** Each phase adds to the same Next.js codebase. Phase 2 adds `/portal` routes and Supabase. Phase 3 exposes the same DB to an app. Nothing gets thrown away.  
- **Netlify MCP advantage:** Claude can build and deploy directly via the connected Netlify MCP tool, meaning a Cowork session can go from code to live URL without Maika needing to manually push or configure CI/CD.

---

## 8\. SEO & Marketing Requirements

- Each page must have a unique `<title>` and `<meta description>`  
- Homepage title: `GoDo LLC | Home Preventative Maintenance | SF Bay Area & San Joaquin Valley`  
- Use semantic HTML: `<h1>` once per page, proper heading hierarchy  
- Schema markup: LocalBusiness schema on the homepage (name, address, phone, service area, license number)  
- Service area pages (Phase 1b): Consider dedicated landing pages per city for local SEO (e.g., `/manteca`, `/los-gatos`, `/dublin`)  
- Google Analytics 4 \+ Google Search Console: set up before launch  
- Google Business Profile: ensure website URL matches the domain

---

## 9\. Content Assets Available

The following resources exist and should inform copy, not be reproduced verbatim:

- Full Business Plan (subscription model, customer personas, tier definitions, pricing logic)  
- Competitive Landscape analysis (how to position GoDo vs competitors)  
- The Home Maintenance Swagger Guide (premium positioning language, trust-building copy)  
- Objection Handling Scripts (FAQ and common customer objections with responses)  
- 10-Point Home Health Checkup framework (the entry-offer product)  
- Door-to-Door Marketing System (referral program mechanics)

**Do not publish internal financial projections, bid formulas, overhead percentages, or employee/contractor cost structures** on the public website.

---

## 10\. Compliance & Trust Elements

Every page (at minimum, footer) must display:

- **CSLB License \#1148177** (California Contractors State License Board)  
- **General Liability Insured** (carrier: John Williams Agency / Farmers Insurance)  
- Business address: 671 Spumante Ln, Manteca, CA 95337  
- Contact: [contact@godollc.com](mailto:contact@godollc.com)

The Pricing and Request pages should also display:

- "30-Day Workmanship Warranty on all services"  
- "No pressure. No scare tactics. Honest findings, always."

---

## 11\. What to Build — Prioritized Sequence

### Session 1 Goal: Phase 0 Live on godollc.com

A single well-focused Cowork session should be able to complete Phase 0\. Work in this order:

**Setup (do once)**

1. Initialize Next.js project with TypeScript \+ Tailwind CSS  
2. Connect repo to Netlify via Netlify MCP — configure godollc.com custom domain  
3. Set up Netlify Forms for the request form (add `netlify` attribute to the form element)  
4. Set Netlify form notifications to forward submissions to [contact@godollc.com](mailto:contact@godollc.com)

**Build order** 5\. **Design system** — define Tailwind config with brand colors (`#0F1F44`, `#E84F2E`), typography scale, button variants, and spacing tokens 6\. **Layout shell** — shared `<Header>` and `<Footer>` components (reused on every page) 7\. **Homepage** (`/`) — hero, trust bar, tier overview cards, value prop section, CTA strip 8\. **Request form** (`/request`) — Netlify Form with all required fields, validation, submit → `/thank-you` 9\. **Services** (`/services`) — tier detail sections, what's included, add-ons 10\. **Pricing** (`/pricing`) — comparison table, FAQ accordion, regional pricing note, CTA 11\. **About** (`/about`) — founder story, values, service area coverage, CSLB callout 12\. **Contact** (`/contact`) — contact form (also Netlify Form), business hours, Google Map embed 13\. **Thank-you** (`/thank-you`) — confirmation message with clear next steps 14\. **SEO pass** — meta tags, Open Graph, LocalBusiness schema on homepage 15\. **Deploy** via Netlify MCP → verify godollc.com is live and forms are working

### Session 2 Goal: Phase 1 Complete

16. Stripe integration — `/pay` page with hosted checkout for the Home Health Checkup  
17. City landing pages — `/manteca`, `/los-gatos`, `/dublin`, `/pleasanton` (for local SEO)  
18. Google Analytics 4 setup \+ Google Search Console verification  
19. Lighthouse audit \+ mobile QA pass  
20. Blog/content section (only if Maika confirms this is in scope)

### Future Sessions: Phase 2 (Portal)

- Supabase project setup (database schema: members, properties, visits, photos)  
- Supabase Auth — member login flow  
- `/portal` route group — dashboard, Home Vault, property profile, billing  
- Housecall Pro integration (webhook or API sync for visit data)  
- Stripe Billing — subscription management in the portal

---

## 12\. Remaining Open Decisions

The platform, domain, and architecture are confirmed (see Section 0). These are the remaining items that need Maika's input — ideally resolved before or at the start of a Cowork session so the build doesn't stall.

| Decision | Options | Notes |
| :---- | :---- | :---- |
| **Public pricing display** | Exact numbers / Ranges / "Contact for pricing" | Exact prices convert better. Ranges work if Bay Area vs SJC pricing differs noticeably. |
| **Stripe in Session 1?** | Yes — include / No — defer to Session 2 | Request form alone is enough for Phase 0\. Stripe can wait if timeline is tight. |
| **Form destination** | Email only ([contact@godollc.com](mailto:contact@godollc.com)) / Route into Housecall Pro | Netlify Forms → email is simplest. HCP integration adds complexity — defer to Phase 1\. |
| **Blog / content section** | Yes (Session 2\) / No / Maybe later | Good for SEO but not required for vendor list credibility. |
| **Live chat widget** | Tidio (free tier) / Intercom / None | None is fine for Phase 0\. Easy to add later. |
| **Google Map API key** | Must be obtained from Google Cloud Console | Required for the map embed on the Contact page — have this ready before the session. |

---

## 13\. Do Not Do List

- Do not display internal bid formulas, labor rates, overhead percentages, or margin targets  
- Do not display Maika's title as "Co-Owner" or "Co-Founder" — use **CEO** or **Administrator** (DGS certification compliance)  
- Do not use placeholder lorem ipsum anywhere in a deployed version  
- Do not collect payment info via a custom HTML form — always use Stripe's hosted checkout or Stripe.js elements  
- Do not build the client login portal in Phase 0 or Phase 1 — only set up the folder structure so it slots in cleanly in Phase 2  
- Do not use Wix or any no-code platform — the stack is confirmed as Next.js \+ Netlify  
- Do not use generic "AI aesthetic" design choices (Inter/Roboto fonts, purple gradients, cookie-cutter layouts) — GoDo's brand is navy `#0F1F44` \+ orange `#E84F2E`, authoritative and warm, not generic SaaS

---

*Document maintained by Maika Langi | GoDo LLC | [contact@godollc.com](mailto:contact@godollc.com)*  
*Last updated: June 2026*  
