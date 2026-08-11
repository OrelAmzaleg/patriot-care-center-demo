# Patriot Care Center — Demo Website

A **local, static demo website** for **Patriot Care Center** — a full redesign concept of
[patriotcarecenter.com](https://patriotcarecenter.com/), built by **GoBoost** to show the client
what a serious, trustworthy, veteran-focused medical presence can look like.

> This is a **local demo only**. Nothing is deployed. There is no backend — the contact form
> is front-end only and does not send data anywhere.

---

## What it is

A polished, six-page marketing site for a medical practice that serves **veterans, firefighters,
and government personnel**. It's built as **plain static HTML + CSS + a little vanilla JavaScript** —
no framework, no build step, no `node_modules` required to view it. That makes it trivial to run,
impossible to "break the build," and easy for anyone to hand off.

**Pages**

| Page | File | Highlights |
|------|------|-----------|
| Home | `index.html` | Hero + value prop, service cards, trust stats, coverage map, testimonials, CTA |
| Services | `services.html` | IME, VA C&P, Firefighter Physicals, General Care — each with *what it is / who it's for / what to bring / how long* |
| About | `about.html` | Mission, values, leadership placeholder cards (ready for real bios + photos) |
| Locations | `locations.html` | All 4 clinics: address, phone, hours, map placeholder, driving directions |
| Patient Resources / FAQ | `resources.html` | What to expect, insurance, HIPAA statement, downloadable-form placeholders, FAQ accordion |
| Contact | `contact.html` | Front-end booking form, per-location phone numbers, email |

---

## How to run locally

You need **either Node.js or Python** installed (any recent version). Pick one:

### Option A — Node (recommended, one command)

```bash
cd patriot-care-center
npm run dev
```

This runs `npx serve` and hosts the site at **http://localhost:5173**.

### Option B — Python (no npm needed)

```bash
cd patriot-care-center
python -m http.server 5173
```

Then open **http://localhost:5173**.

### Option C — Just open the file

Because it's fully static, you can also double-click **`index.html`** to open it directly in a
browser. (Serving it over `http://localhost` is recommended so relative links and the sitemap
behave exactly as they would in production.)

**Port:** `5173` for the served options. Change the number in `package.json` (or the Python command)
if that port is busy.

---

## Design system (locked before build)

- **Feel:** dignified medical + subtle patriotic gravitas — calm, competent, official. No gaudy flags.
- **Color:** deep **navy** primary (`#0f2f52` / `#0a1f38`), warm **gold** accent (`#c1974d`),
  **muted oxblood red** (`#9c2b23`) used sparingly for emphasis.
- **Type:** **Source Serif 4** for headings (institutional trust) + **Inter** for body (clean, legible).
  Both load from Google Fonts with system-serif / system-sans fallbacks so the site still looks right offline.
- **Motion:** subtle only — gentle fade-up on scroll, smooth hovers. Honors `prefers-reduced-motion`.
- **Accessibility (WCAG AA target):** skip link, visible focus rings, 44–48px tap targets,
  semantic landmarks, `aria-current` nav, labeled form fields, descriptive `alt`/`aria-label` on graphics,
  keyboard-operable mobile menu and FAQ.

---

## SEO built in

- Unique `<title>` + meta description per page
- Open Graph + Twitter Card tags (`assets/img/og-image.svg`)
- Semantic HTML5 (`header`/`nav`/`main`/`section`/`article`/`footer`), single `<h1>` per page
- **Schema.org JSON-LD:** `MedicalClinic` on Home, per-location `MedicalClinic`/`PostalAddress`
  on Locations, `MedicalProcedure` list on Services, `FAQPage` on Resources, `ContactPage` on Contact
- `sitemap.xml`, `robots.txt`, `site.webmanifest`, SVG favicon

---

## Imagery approach

To guarantee the demo renders perfectly **with zero broken-image risk during a live client walkthrough**,
all art is **hand-built SVG** (the shield emblem, hero motif, coverage map, per-location street-map
thumbnails, editorial illustration) plus the navy/gold system — no external photo hotlinks required.
Photo "slots" (leadership headshots, hero photography) are structured so real, licensed/open photography
can drop straight in later.

---

## Placeholders to replace before launch

Everything below is intentionally illustrative for the demo and clearly marked on-site:

- **Addresses & suite numbers** — formatted, plausible placeholders per city. Replace with verified addresses.
- **Phone numbers** — use the reserved **555-01xx** fictional range. Replace with real clinic lines.
- **Leadership team** — the About page now shows the **real 5-person team** (Steven Bohbot · CEO, Dr. Babak Rostami · CMO, Dr. David Cohen · Physician, Tara Chriki · COO, Tom Bohbot · CTO) with names, titles, bios, and headshots sourced from the client's current site. Swap for higher-resolution photography on launch.
- **Downloadable forms** — the three form cards link to `#` placeholders; wire to the client's real PDFs.
- **Contact form** — front-end only; connect to an email/CRM endpoint (e.g. Formspree, or GoBoost automation) for production.
- **Insurance / accepted plans** — to be confirmed with the client.

---

## Why it beats the current site

| Current site | This redesign |
|---|---|
| Generic, dated, stock-image feel | Dignified navy/gold system, serif headings, custom shield emblem |
| No motion / flat imagery | Cinematic AI-generated brand film (physician–veteran handshake) on the home page |
| Vague service descriptions | Each service explains *what it is, who it's for, what to bring, how long it takes* |
| Empty leadership section | Real 5-person leadership team with photos, titles, and bios |
| Weak CTAs | Clear, repeated "Book an Exam" path to a real booking form |
| No testimonials / trust signals | Trust stat bar, HIPAA badges, representative testimonials |
| No insurance / privacy info | Dedicated insurance + HIPAA sections and a full FAQ |
| Weak mobile nav | Accessible slide-in mobile drawer, 44px+ targets, responsive at every breakpoint |
| Thin SEO | Per-page meta, Open Graph, schema.org, sitemap, robots |

---

*Built by GoBoost. Redesign concept for evaluation — not affiliated content, not deployed.*
