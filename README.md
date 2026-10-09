# ToolVerse ✦
**Every tool. One universe.**

ToolVerse is the expanded version of Everyday Tools: a mobile-first, bilingual (English + বাংলা), premium-dark online toolbox designed to grow over time.

## Live site
https://hunter09090.github.io/everyday-tools/

## Categories
1. Calculators & Math
2. Converters
3. Text & Writing
4. Image & Design (roadmap)
5. PDF & Documents (roadmap)
6. Developer Tools
7. Date & Time
8. Money & Finance
9. Education & Study
10. Fun & Random

## Current tools
Age, percentage, discount, profit/loss, BMI, GPA/CGPA, date, EMI, loan, salary, tax, area, average, unit converter, currency converter, time-zone converter, days until, number to words, random number, random name picker, countdown timer, password generator, password strength checker, QR code generator, word counter, case converter, JSON formatter, URL encoder/decoder, duplicate line remover.

## Features
- Search across tool names, descriptions and keywords
- Category filtering across 10 expandable categories
- English and Bengali interface toggle
- Premium dark theme and optional light theme
- Favorites and recently opened tools stored on the device
- Keyboard shortcut `/` to focus search; `Esc` to clear
- PWA manifest and service worker
- Existing individual tool URLs retained
- Client-side processing wherever practical

## Technology
HTML5 · CSS3 · Vanilla JavaScript · GitHub Pages

## Development notes
- Keep existing `tools/*.html` routes intact when adding categories.
- Add new tools to the catalog in `toolverse.js` and create the corresponding `tools/<id>.html` page.
- Image/PDF categories are shown as planned categories until real tools are implemented.
- GitHub Pages is static hosting; server-side features and secrets require a separate backend.
