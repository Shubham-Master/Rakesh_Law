# RKLAW — Advocate Rakesh Kumar

> Client-acquisition website for **Advocate Rakesh Kumar**, a Jharkhand Bar Council enrolled advocate based at Hazaribagh Civil Court. Built to convert search visitors and referrals into WhatsApp consultations.

**Live:** https://shubham.github.io/Rakesh_Law/ *(update with your actual GitHub Pages URL)*

---

## What This Is

A single-page static website designed specifically for **legal client conversion in Jharkhand** — not a generic law firm template. Every design and copy choice is optimized for:

1. **WhatsApp-first conversion** — most Indian legal clients contact via WhatsApp, so every CTA leads there with pre-filled context messages.
2. **Local trust signals** — Jharkhand Bar Council, Hazaribagh court, district coverage, Hindi-English mix.
3. **Direct, accessible language** — "Bail chahiye", "Zameen jhagda", "Jail se azadi" — not corporate legalese.
4. **Mobile-first responsiveness** — most clients will visit on phones.

---

## Features

- 🟢 **WhatsApp integration everywhere** — floating button, nav, hero, service cards, banner, contact form. Each link sends a pre-filled context-aware message.
- 🔒 **Masked phone & email** — click-to-reveal, prevents bot scraping.
- 📝 **WhatsApp-powered contact form** — form fields auto-fill into a WhatsApp message; no backend needed.
- 🎯 **Local SEO ready** — meta tags, Schema.org `LegalService` structured data, keyword-rich copy (criminal lawyer Hazaribagh, bail advocate Jharkhand, etc.)
- ⚡ **Zero dependencies** — pure HTML/CSS/JS, no frameworks, no build step. Deploys directly to GitHub Pages.
- 🎨 **Visually striking** — Anton + Instrument Serif typography, marquee ticker, parallax hero, scroll reveals, animated counters, masked contacts.
- 🇮🇳 **Bilingual touches** — Hindi accents throughout (Devanagari font) for Jharkhand audience.

---

## File Structure

```
Rakesh_Law/
├── index.html                  # Markup, content, structure
├── assets/
│   └── rakesh.png              # Advocate's portrait (used in hero + about)
├── css/
│   ├── base.css                # CSS variables, reset, animations
│   ├── components.css          # Nav, buttons, marquee, form, chips
│   └── sections.css            # Hero, services, about, contact, footer
├── js/
│   └── main.js                 # Scroll reveals, counters, form, masking
└── README.md
```

---

## Deployment to GitHub Pages

1. Push all files to your repo's `main` branch.
2. Go to **Settings → Pages**.
3. Under **Source**, select `main` branch and `/ (root)`.
4. Save. Site goes live at `https://<username>.github.io/Rakesh_Law/`.

That's it. No build step, no env vars, no server.

### Custom domain (optional but recommended)
For better trust + SEO, get a domain like `advrakeshkumar.in` for ~₹600/year:
1. Buy from GoDaddy / Namecheap / Hostinger.
2. In **Settings → Pages → Custom domain**, add the domain.
3. Add a CNAME record at your registrar pointing to `<username>.github.io`.

---

## Customization Guide

### 1. Change WhatsApp number
The number `+91 83405 88597` appears in two places:

- **`index.html`** — search-replace `918340588597` (used in WhatsApp links).
- **`js/main.js`** — change `_phoneParts = ['91', '8340', '588597']` to new digits, split however you like (split exists to discourage scrapers).

### 2. Change email
**`js/main.js`** — update `_emailParts = ['rak', 'zids', '@', 'gma', 'il', '.com']` to new address parts.

### 3. Update advocate photo
Replace `assets/rakesh.png` with a new image. Keep the filename or update both references in `index.html`.

**For best results:** square or portrait crop, face in upper-half, professional setting (chambers, courtroom, black coat). The CSS uses `object-position: center 25%` so the face is properly framed.

### 4. Edit service cards
In `index.html`, find `<!-- SERVICES -->`. Each `.svc-card` has:
- Image (`<img class="svc-img">`) — currently Unsplash thematic placeholders
- Tag (English + Hindi)
- Heading
- Description
- Keywords (`.kw` pills)
- WhatsApp link with pre-filled message

**Replace stock images:** when Rakesh has chamber/courtroom/work photos, swap the Unsplash URLs with `assets/your-image.jpg`.

### 5. Add real client testimonials
Find `<!-- TESTIMONIALS -->`. Currently three placeholders. Once Rakesh has Google Business reviews, copy the text and replace.

### 6. Update coverage districts
Find `<!-- COVERAGE -->` and edit the `.cov-i` items. Mark primary office with class `p`.

### 7. Change colors / fonts
All in **`css/base.css`** under `:root`:
```css
--yellow: #eab308;     /* main accent */
--black: #050505;      /* background */
--display: 'Anton';    /* big headings */
--serif: 'Instrument Serif';
```

---

## Things to Do Before Going Live

- [ ] Replace Unsplash service-card images with real photos when available
- [ ] Add real Google Business reviews to testimonials section
- [ ] Verify WhatsApp number works (test from a different phone)
- [ ] Add Google Analytics or Plausible (optional)
- [ ] Submit URL to Google Search Console for indexing
- [ ] Add to Google Business Profile (huge for local SEO)
- [ ] Get a custom `.in` domain (massive trust signal vs github.io URL)
- [ ] Add favicon (`assets/favicon.ico`)

---

## Tech Notes

- **No frameworks** — vanilla HTML/CSS/JS, ~2000 lines total. Loads fast.
- **Fonts:** Google Fonts (Anton, Instrument Serif, Inter, Noto Serif Devanagari).
- **Images:** Unsplash placeholders for service cards (free for commercial use). Replace with real photos when available.
- **Animations:** CSS transitions + IntersectionObserver. No motion library.
- **Browser support:** Modern browsers (Chrome, Safari, Firefox, Edge — last 2 versions).
- **Lighthouse:** Should score 95+ on Performance, 100 on SEO, Accessibility.

---

## Disclaimer Block

Already in the footer:
> *This website is for informational purposes only and does not constitute legal advertisement.*

This is to comply with Bar Council of India advertising rules. Don't remove it.

---

## Credits

Built for Adv. Rakesh Kumar by Shubham. Stock images from Unsplash (free license).

---

**Questions / updates needed?** Hit me up. The site is yours to evolve — just keep the WhatsApp conversion path frictionless and the language honest. That's what converts in this market.
