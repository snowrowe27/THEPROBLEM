# THE PROBLEM — howtoblow40million.com

Teaser/landing site for **THE PROBLEM**, Fordom Studio's feature documentary on
boxer Adrien "The Problem" Broner.

Built from the *THE PROBLEM — Film Design System* handoff (Claude Design export).
It's a single-page cinematic scroller: wordmark hero with the `$40,000,000 → $0`
count-down hook, "the turn" (spectacle → human story), and an email capture.

## Stack

Zero-build static site. The page is plain HTML/CSS plus a small set of React
components transpiled in the browser by Babel-standalone — so it deploys to any
static host (Vercel) with no toolchain.

| Path | Role |
|---|---|
| `index.html` | Page shell — meta/OG tags, page-level motion CSS, loads the design system + sections. |
| `styles.css` + `tokens/` | Design-system tokens (color, type, spacing, effects, fonts). |
| `_ds_bundle.js` | Compiled design-system components (`Wordmark`, `MoneyCounter`, `Button`, `Badge`, `Input`). |
| `*.jsx` | Site sections: `Nav`, `Hero`, `Turn`, `Capture`, `SiteFooter`, `TrailerModal`, `App`, `icons`. |
| `assets/` | Local webfonts + curated archival imagery. |

## To finish before launch

- **Trailer:** paste a YouTube/Vimeo *embed* URL into `TRAILER_URL` in `App.jsx`
  (empty shows a "trailer dropping soon" placeholder).
- **Email capture:** the form in `Capture.jsx` currently shows a success state
  client-side only — wire it to an email platform (Mailchimp/ConvertKit/Beehiiv)
  to actually collect addresses.
- **Socials:** footer links in `SiteFooter.jsx` are `#` placeholders.
- **Release copy:** `Q2 2025` per the deck — update when locked.

## Run locally

Any static server, e.g. `python3 -m http.server 8000`, then open
`http://localhost:8000`.
