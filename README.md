# Star Security Services LLC — Website

## Stack
Vite + React + React Router + Tailwind CSS. Static SPA — no backend, no database.
Deploy target: Netlify, Cloudflare Pages, or GitHub Pages (any static host).

## Run locally
    npm install
    npm run dev

## Build for production
    npm run build
    npm run preview   # test the production build locally

## What's built (Phase 1)
- Home (/)
- About (/about)
- Services directory with category filter + risk self-assessment widget (/services)
- All 7 service detail pages are live and data-driven (/services/:slug) —
  manned-guarding, smart-security, cctv-monitoring, mobile-security,
  k9-security, maritime-security, risk-consultancy
- Contact (/contact) with branch selector and a request form (front-end only —
  wire the form to a real email/CRM endpoint before going live, it currently
  just shows a confirmation state)
- 404 fallback

## Not yet built (confirm before I build these)
- Green CSR page — the source content archive has no real "trees planted"
  total, only that Star plants one tree per employee hired. Don't invent a
  global counter without a real figure from the client.
- Careers portal + CV validator
- Chatbot ("Star-Bot")
- Actual hosting/deployment — happy to walk through Netlify or Cloudflare
  Pages, both free for this

## Content integrity note
All copy comes from the verified content archive (starsecurity.ae), not the
fabricated design-brief document, which included an invented "signed
statement" from the chairman that doesn't appear anywhere on the real site.
Don't merge that quote back in without the client confirming it — putting
words in a real person's mouth on a live corporate site is a liability, not
a copywriting choice.

## Design decisions that diverge from the original brief
- No glassmorphism nav (brief asked for blurred glass — dropped for a solid
  navy bar, matches the anti-generic-SaaS direction)
- No fabricated stats (brief invented "100% compliance," "14,000+ trees" —
  not in the verified source, so not shipped)
- Manifest/dossier layout instead of icon card grids for services — ties into
  what the company actually does (compliance, documentation) rather than
  generic SaaS dashboard cards
