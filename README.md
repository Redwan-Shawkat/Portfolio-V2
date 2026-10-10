# Portfolio V2

> Personal portfolio of Mohammad Radwan Shawkat — full-stack engineer in Dhaka. A single-page app in Next.js with seven client-routed pages: home, skills, projects, experience, training, education and contact. Dark cream-and-red theme, no UI framework, frontend-only contact form.

Live pages are routed with the Next.js App Router, so every section has its own URL and navigation never triggers a full page reload.

## Languages and tech

| What | Used for |
|---|---|
| **JavaScript (JSX)** | All application code — React 19 function components |
| **CSS** | Tailwind CSS v4, configured CSS-first in `globals.css` via `@theme` |
| **Next.js 16** | App Router, static prerendering, `next/font` for self-hosted fonts |

Four runtime packages in total: `next`, `react`, `react-dom`, `tailwindcss`. No jQuery, no Bootstrap, no carousel or filtering library, no icon package — the slider, the project filter, the scroll reveals and the six SVG icons are all written here.

## Running it on a new machine

Requires **Node.js 20 or newer** ([nodejs.org](https://nodejs.org)). Check with `node -v`.

```bash
git clone https://github.com/Redwan-Shawkat/<repo-name>.git
cd <repo-name>
npm install
cp .env.local.example .env.local   # Windows CMD: copy .env.local.example .env.local
npm run dev
```

Open <http://localhost:3000>.

### Contact form key

The form posts straight to [Web3Forms](https://web3forms.com) from the browser — there is no backend. Without a key every other page works fine and the form reports that it is not wired up.

1. Enter your email at [web3forms.com](https://web3forms.com) and copy the free access key.
2. Put it in `.env.local`:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
   ```
3. Restart `npm run dev`.

Submissions arrive at the address registered with that key. `.env.local` is gitignored — never commit the key.

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Dev server with hot reload on port 3000 |
| `npm run build` | Production build; all seven routes prerender to static HTML |
| `npm start` | Serve the production build (run `build` first) |

## Project layout

```
src/
├─ app/
│  ├─ layout.jsx          fonts, metadata, Nav + SocialRail + Footer + Cursor
│  ├─ globals.css         Tailwind import, @theme tokens, slide/reveal/cursor CSS
│  ├─ page.jsx            /
│  ├─ skills/page.jsx     /skills
│  ├─ projects/page.jsx   /projects
│  ├─ experience/page.jsx /experience
│  ├─ training/page.jsx   /training
│  ├─ education/page.jsx  /education
│  └─ contact/page.jsx    /contact
├─ components/
│  ├─ Nav.jsx             sticky top nav, active route highlighting
│  ├─ SocialRail.jsx      fixed left rail — Gmail, call, GitHub, LinkedIn
│  ├─ Footer.jsx          brand, page list, contact column
│  ├─ Cursor.jsx          cursor ring that swells over clickable things
│  ├─ Reveal.jsx          IntersectionObserver scroll reveal
│  ├─ SectionHeading.jsx  shared eyebrow + heading + lede
│  ├─ HeroSlider.jsx      3-slide crossfade, 6s autoplay, clickable dots
│  ├─ ProjectGrid.jsx     project cards with All / Client / Open Source filter
│  ├─ ContactForm.jsx     Web3Forms submit with sending, sent and error states
│  └─ Icons.jsx           the six inline SVG icons
└─ data/
   └─ cv.js               ALL site content — edit here, not in the pages
```

## Editing content

Everything readable on the site lives in [`src/data/cv.js`](src/data/cv.js) — profile details, hero slides, skills, projects, jobs, courses, qualifications. The pages only lay it out, so adding a project means adding one object to the `projects` array.

### Theme

Colours and fonts are tokens at the top of [`src/app/globals.css`](src/app/globals.css):

| Token | Value | Role |
|---|---|---|
| `--color-ground` | `#0b070d` | page background |
| `--color-panel` | `#0e0911` | cards and panels |
| `--color-ink` | `#060407` | footer, button text on accent |
| `--color-heading` | `#f9e6b8` | headings, cream |
| `--color-body` | `#9c9484` | body copy |
| `--color-accent` | `#f04242` | accent red |

Change a value there and it propagates everywhere.

### Hero images

The three hero slides use layered CSS gradients (`.glow-warm`, `.glow-red`, `.glow-mix` in `globals.css`). To use photographs instead, drop them in `public/slider/` and add a `background-image` to those three rules.

## Deploying

Import the repository at [vercel.com](https://vercel.com) and add `NEXT_PUBLIC_WEB3FORMS_KEY` under Environment Variables. The build is fully static, so Netlify, Cloudflare Pages or GitHub Pages work too.
