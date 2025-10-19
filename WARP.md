# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project scope
- Target: “Alkhulafau Student Search & Enrollment System” — single-file, production-ready PWA. Installable, offline-first, optimized for Vercel. Current repo is a static single-page app; use this guide to evolve it to the full spec below.

Common commands
- Serve locally (required for SW/manifest):
  - Node: npx serve -l 3000 .  or  npx http-server -p 3000 .
  - Python: python -m http.server 3000
  - Open http://localhost:3000
- Vercel (optional, if installed):
  - vercel dev
  - vercel deploy --prod
- PWA audit (Lighthouse):
  - npx lighthouse http://localhost:3000 --only-categories=pwa,performance,seo --view
- There is no build, lint, or test suite configured in this repo.

High-level architecture
- Single-page app (index.html)
  - UI: Tabs/Sidebar — Search, Enrollment, Manage, Profile. Responsive “Tailwind-style” (via CDN). Dark mode toggle via data-theme or class toggling.
  - State: In-memory view state; persistent data in IndexedDB (preferred for scale) with localStorage as fallback for small datasets.
  - Roles: Admin, Staff, Viewer. Local auth via modal (username/PIN). Role determines UI visibility and action enablement.
- Data model (student record)
  - Fields: Index Number, Name, Course, Gender, Region, Status (+ optional Phone, Residence, Program, Class, Date for enrollment flows).
  - Primary key: Index Number (string). De-duplication/merge is keyed by this value.
- Ingestion
  - Excel: XLSX (SheetJS) from CDN — read first worksheet via XLSX.read(ArrayBuffer) → sheet_to_json().
  - PDF: pdf.js for text PDFs. If no textItems detected (likely scanned), fall back to Tesseract.js OCR (Web Worker) to extract lines; parse records heuristically by index-number patterns.
  - Merge: Normalize keys to the canonical schema; skip/overwrite controlled by user; store in IndexedDB.
- Search, filter, edit
  - Client-side filtering by name, course, gender, region. Inline edit (Admin/Staff); persist changes to IndexedDB; update rendered results.
- Export
  - Excel: XLSX.utils.json_to_sheet() → writeFile().
  - PDF: jsPDF with header/logo (school name) and compact tabular output; paginate when exceeding page height.
- Offline / PWA
  - Service Worker at /sw.js with cache version (e.g., alkhulafau-pwa-v1). Precache shell (/, /index.html, manifest, icons) + CDN libs (xlsx, pdf.js, pdf.worker, tesseract.min.js, jspdf). Strategy: cache-first for same-origin; network-first with fallback for cross-origin CDNs.
  - Installability: manifest.json linked in index.html; provide 192x192 and 512x512 icons; theme-color meta.

Files to add/update (production)
- index.html (head)
  - <link rel="manifest" href="/manifest.json">, <meta name="theme-color" content="#006D77">, icons link tags.
  - CDN scripts: Tailwind (https://cdn.tailwindcss.com), xlsx, pdf.js (+ workerSrc), tesseract.min.js, jsPDF. Defer non-critical scripts; show a spinner until libs are ready.
- manifest.json (root)
  - Name: Alkhulafau Enrollment PWA; short_name: Alkhulafau
  - theme_color: #006D77; background_color: #FFFFFF; display: standalone; start_url: /
  - Icons: 192x192, 512x512 (PNG) at /icons/icon-192.png and /icons/icon-512.png
- sw.js (root)
  - Precache ASSETS (/, /index.html, /manifest.json, icons, and CDN URLs). Handle install/activate/fetch. Bump CACHE_NAME when asset list changes.
- Icons
  - Place PNGs at /icons/icon-192.png and /icons/icon-512.png
- Optional (Vercel)
  - vercel.json for headers (e.g., Cache-Control for static assets) — not required for functionality but useful for tuning.

Implementation notes (concise)
- pdf.js + OCR: Try pdf.js first. If page.getTextContent().items length is 0 across pages, run Tesseract.js on image-rendered pages (canvas) and parse by index-number regex; merge into canonical fields.
- IndexedDB: Store collections students and enrollments; create index by indexNumber; wrap with a tiny helper for get/put/bulkPut to keep logic isolated.
- Role gating: Central applyPermissions() toggles buttons/sections based on role; never block read/search for Viewer.
- Merge strategy: new uploads update existing records by indexNumber; optionally keep first-seen non-empty values when conflicts arise.
- Dark mode: Add a toggle that flips a data-theme/class and persists preference in localStorage.
- Performance: Preconnect to CDN origins; lazy-load OCR only when needed; keep everything in a single HTML for deploy simplicity.

Sample files (reference)
```json path=null start=null
{
  "name": "Alkhulafau Enrollment PWA",
  "short_name": "Alkhulafau",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#006D77",
  "background_color": "#FFFFFF",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

Current gaps vs target
- sw.js in repo is a placeholder — replace with a real implementation and keep cache versioning.
- No manifest.json or icons — add both at the root as above.
- OCR (Tesseract.js) not wired — add lazy-loaded OCR fallback when pdf.js yields no text.
- Storage is localStorage — introduce IndexedDB for larger datasets and durability.
- Tailwind CDN, dark mode, toasts/spinners not yet integrated — add minimal UI polish accordingly.

Additional features (roadmap)
- Advanced filters & saved views: multi-field filters (name/course/gender/region/status) with "Save View" to local settings; quick-access in Profile.
- Inline edit with audit: track modifiedAt/modifiedBy per record in IndexedDB; show change badges in tables.
- Backup/Restore: export entire IndexedDB (students, enrollments, settings) to a JSON file; restore by import with dry-run preview.
- Web Workers: move XLSX parsing, pdf.js text extraction, and Tesseract OCR to workers to keep UI responsive; progress via postMessage.
- Profile tab: change PIN, pick theme (light/dark/system), set default tab, manage saved views; persist in localStorage.
- Reports: parametric PDF/Excel reports (e.g., by course/region/status) with header/logo and footer pagination.
- Shortcuts & install UX: add manifest "shortcuts" for Search and Enrollment; show install button when beforeinstallprompt fires.
- Routing resilience: SPA hash routes (#/search, #/enroll, #/manage, #/profile) so deep-links work on static hosting without server rewrites.
- Accessibility: focus traps for modals, ARIA roles for tabs, keyboard shortcuts (/, e, g, r, m, p) for quick nav.
- Data validation: light schema check on upload (required fields present; Index Number unique and matches /\b\w{6,12}\b/).

Icon generation (one-time)
- Generate PWA icons from a source PNG:
  - npx pwa-asset-generator icon-source.png ./icons --icon-only --path "/icons"

Vercel config (optional)
- SPA fallback and caching headers:
```json path=null start=null
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    { "source": "/sw.js", "headers": [{ "key": "Cache-Control", "value": "no-cache" }] },
    { "source": "/(.*)", "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] }
  ]
}
```

Manifest shortcuts (add to manifest.json)
```json path=null start=null
{
  "shortcuts": [
    { "name": "Search", "url": "/#/search", "icons": [{ "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" }] },
    { "name": "Enrollment", "url": "/#/enroll", "icons": [{ "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" }] }
  ]
}
```

Service worker notes
- Precache CDN libs carefully; consider stale-while-revalidate for cross-origin to avoid long cold starts.
- Cache OCR worker and pdf.worker explicitly; bump CACHE_NAME when any library URL changes.
- Provide offline fallback page/table skeleton if index fetch fails; keep a tiny inline HTML string as a last-resort response.
