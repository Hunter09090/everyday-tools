# Daily Magic ✦
**A little magic for everyday life.**

Daily Magic is a mobile-first, bilingual (English + বাংলা) toolbox for practical everyday tasks. It builds on the existing Everyday Tools project while keeping current tool URLs intact.

## Live site
https://hunter09090.github.io/everyday-tools/

## Categories
1. Calculators & Math
2. Converters
3. Text & Writing
4. Image & Design (planned tools)
5. PDF & Documents (planned tools)
6. Developer Tools
7. Date & Time
8. Money & Finance
9. Education & Study
10. Fun & Random
11. Privacy & Security
12. Health & Lifestyle

## Current capabilities
- 29 existing individual tools and their existing URLs
- 12 expandable categories
- English and Bengali interface toggle
- Premium dark theme with optional light theme
- Search and category filters
- Favorites and recently opened tools stored locally on the device
- Keyboard shortcut `/` to focus search; `Esc` to clear
- PWA manifest and service worker
- Client-side processing wherever practical

## Technology
HTML5 · CSS3 · Vanilla JavaScript · GitHub Pages

## Architecture and safe expansion
- Preserve existing `tools/*.html` routes.
- Keep brand-wide styling in `daily-magic.css`; avoid unnecessary edits to legacy `style.css`.
- Tool catalogue currently lives in `toolverse.js`; each listed tool must have a matching `tools/<id>.html` page.
- Before a tool is listed, verify its route exists and its main interaction works.
- New categories can be added to the category registry without changing unrelated tool pages.
- Keep local-storage keys compatible during migration so existing favorites and preferences are not lost.
- Use a feature branch and pull request for each meaningful change; test mobile layout, navigation, search, favorites, theme, language, and existing tool routes before merging.
- Image and PDF categories must not be presented as fully functional until their real tools are implemented and tested.

## Privacy and deployment
Calculations and text processing should run locally whenever practical. External APIs may be required for live data. GitHub Pages is static hosting, so secrets and server-side features need a separate backend.
