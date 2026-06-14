# Altamar Consulting — website

Production marketing site for **Altamar Consulting**, a boutique AI advisory for owner-led SMEs
in Ireland and the UK. Single landing page built with **Next.js (App Router) + TypeScript +
Tailwind CSS v4**, deployed to **Vercel**.

Content lives in typed data files (no CMS in v1) and is easy to edit — see
[Editing content](#editing-content).

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (type-checks + prerenders)
npm run start    # serve the production build
npm run lint
```

No environment variables are required to run the site. (If you later wire the contact form or a
booking embed to a service, add its keys via `.env.local` and Vercel project settings.)

---

## Project structure

```
src/
  app/
    layout.tsx           Root layout: fonts, SEO metadata, JSON-LD
    page.tsx             The landing page (composes the section components)
    globals.css          Design tokens (colours, fonts) — edit the brand here
    icon.tsx             Favicon (brass "A" monogram, generated)
    opengraph-image.tsx  Social share image (generated)
    sitemap.ts           /sitemap.xml
    robots.ts            /robots.txt
    privacy/page.tsx     Privacy policy placeholder
  components/            One file per page section (Header, Hero, … Footer) + ui.tsx
  content/
    types.ts             TypeScript shapes for all content
    site.ts              ← ALL EDITABLE CONTENT lives here
```

---

## Editing content

Almost everything you'll want to change is in **`src/content/site.ts`**:

| Want to change… | Edit… |
| --- | --- |
| Name, tagline, contact email, booking link, form endpoint, socials | `siteConfig` |
| The two service pillars | `services` |
| The 5-rung engagement ladder | `engagementLadder` |
| The 10-step method labels | `methodSteps` |
| Case studies / selected work | `projects` (set `draft: true` to hide one) |
| Team & network bios | `team` (set `published: false` to hide; `kind` = partner/associate/silent) |
| Trust strip + "who we're not for" | `trustItems`, `notFor` |
| FAQ | `faqs` |

The hero headline lives in `src/components/Hero.tsx`.

### Brand / theme

All colours and font variables are CSS custom properties at the top of
**`src/app/globals.css`** (`--ink`, `--paper`, `--brass`, …). Change them once to re-skin the
whole site. Fonts (Fraunces for headings, Inter for body) are wired in `src/app/layout.tsx` via
`next/font`.

---

## Deployment (GitHub → Vercel)

This repo is connected to GitHub at
`https://github.com/IOResource-company/altamar_consulting`.

**One-time setup:** in the Vercel dashboard → **Add New Project → Import** the
`IOResource-company/altamar_consulting` repo. Next.js is auto-detected — no configuration
needed.

**After that:** every push to `main` deploys to production automatically; pushes to other
branches get their own preview URL. Roll back from the Vercel dashboard at any time.

---

## Outstanding `[CONFIRM]` items

Search the codebase for `CONFIRM` to find every placeholder. Current list:

- **Brand:** final accent colour + font pairing (currently muted brass/gold + Fraunces/Inter)
- **Domain & contact:** final domain, contact email, booking link (Calendly/Cal.com), and the
  contact-form POST endpoint (`siteConfig.formEndpoint`)
- **Method:** the ten labels for "10 Steps to AI Mastery" (placeholders only — not invented)
- **Team:** verified bios + photos for Simon (exact Meta title/tenure), Marshall, Doug Deverman,
  D. Menelly; decision on Barry (silent partner — default omitted)
- **Work:** which seed projects are cleared to publish vs hold (public-sector agent flagged)
- **Legal:** footer entity line and the privacy policy content (`/privacy`)
