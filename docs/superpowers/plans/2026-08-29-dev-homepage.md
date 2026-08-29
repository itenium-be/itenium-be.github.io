# dev.itenium.be Landing Page Implementation Plan

> **For agentic workers:** Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A static Astro page at dev.itenium.be indexing 12 itenium developer tools plus the technical blog.

**Architecture:** One page, no client framework. A typed catalog in `src/data/projects.ts` is the single source of truth; components render from it. Adding a project is one array entry plus one image.

**Tech Stack:** Astro 5, TypeScript, bun, GitHub Actions to GitHub Pages.

**No test suite** — explicit user decision. Verification is `bun run build` succeeding plus asserted DOM checks in the browser.

---

### Task 1: Scaffold

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`

- [ ] **Step 1: Init Astro**

```bash
bun create astro@latest . -- --template minimal --no-install --no-git --typescript strict --skip-houston
bun install
```

- [ ] **Step 2: Set the site URL in `astro.config.mjs`**

```js
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://dev.itenium.be',
})
```

No `base` — a custom domain serves from the root.

- [ ] **Step 3: Verify the build runs**

Run: `bun run build`
Expected: exits 0, writes `dist/index.html`

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "Scaffold Astro site"
```

---

### Task 2: Catalog

**Files:**
- Create: `src/data/projects.ts`

- [ ] **Step 1: Write the types and the 12 entries**

```ts
export type Category = 'use' | 'install' | 'run'

export type Project = {
  slug: string
  name: string
  pitch: string
  category: Category
  href?: string
  hrefLabel: string
  github: string
  snippet?: string
  tags: string[]
  status?: 'wip'
}

export const sections: { id: Category; title: string; intro: string }[] = [
  { id: 'use', title: 'Use it now', intro: 'Open it in a browser. Nothing to install.' },
  { id: 'install', title: 'Install it', intro: 'One command and it lives on your machine.' },
  { id: 'run', title: 'Run it yourself', intro: 'Clone it, compose it up, make it yours.' },
]

export const projects: Project[] = [
  {
    slug: 'qrgenerator',
    name: 'QRGenerator',
    pitch: 'QR codes that carry your colors and your icon',
    category: 'use',
    href: 'https://itenium-be.github.io/QRGenerator/',
    hrefLabel: 'Open',
    github: 'https://github.com/itenium-be/QRGenerator',
    tags: ['TypeScript', 'Browser'],
  },
  {
    slug: 'presentations',
    name: 'Presentations',
    pitch: 'A decade of itenium tech talks, rebuilt in Slidev',
    category: 'use',
    href: 'https://itenium-be.github.io/Presentations/',
    hrefLabel: 'Browse talks',
    github: 'https://github.com/itenium-be/Presentations',
    tags: ['Slidev', 'Vue'],
  },
  {
    slug: 'pdfmerge',
    name: 'PdfMerge',
    pitch: 'Merge, reorder and split PDFs in the browser. No upload, no backend',
    category: 'use',
    hrefLabel: 'Coming soon',
    github: 'https://github.com/itenium-be/PdfMerge',
    tags: ['TypeScript', 'Browser'],
    status: 'wip',
  },
  {
    slug: 'starify-links',
    name: 'Starify Links',
    pitch: 'Every link wears its badge: GitHub stars, Bluesky followers, subscriber counts',
    category: 'install',
    href: 'https://chrome.google.com/webstore/detail/starify-github-repo-links/kpficnopciffopkhjpckhkgmnlakcmig',
    hrefLabel: 'Add to Chrome',
    github: 'https://github.com/itenium-be/starify-links',
    tags: ['Chrome', 'TypeScript'],
  },
  {
    slug: 'yoink',
    name: 'Yoink',
    pitch: 'Because why just have a boring notification',
    category: 'install',
    href: 'https://itenium-be.github.io/Yoink/',
    hrefLabel: 'Read more',
    github: 'https://github.com/itenium-be/Yoink',
    snippet: '/plugin marketplace add itenium-be/Yoink',
    tags: ['Claude Code', 'PowerShell'],
  },
  {
    slug: 'mi-ke',
    name: 'Mi-Ke',
    pitch: 'AutoHotkey scripts that make daily life in Windows less dull',
    category: 'install',
    href: 'https://itenium-be.github.io/Mi-Ke/',
    hrefLabel: 'See the shortcuts',
    github: 'https://github.com/itenium-be/Mi-Ke',
    snippet: 'git clone https://github.com/itenium-be/Mi-Ke && .\\mike.ahk',
    tags: ['AutoHotkey', 'Windows'],
  },
  {
    slug: 'git-numberedadd',
    name: 'Git-NumberedAdd',
    pitch: 'git add, diff and reset files by number instead of by path',
    category: 'install',
    href: 'https://itenium.be/blog/productivity/git-numbered-add-for-powershell',
    hrefLabel: 'Read the post',
    github: 'https://github.com/itenium-be/Git-NumberedAdd',
    snippet: 'Install-Module -Name Git-NumberedAdd',
    tags: ['PowerShell', 'Git'],
  },
  {
    slug: 'date-holidays-be',
    name: 'date-holidays-be',
    pitch: 'Every official Belgian holiday, calculated',
    category: 'install',
    href: 'https://www.npmjs.com/package/@itenium/date-holidays-be',
    hrefLabel: 'View on npm',
    github: 'https://github.com/itenium-be/date-holidays-be',
    snippet: 'bun add @itenium/date-holidays-be',
    tags: ['TypeScript', 'npm'],
  },
  {
    slug: 'sql-training',
    name: 'SQL Training',
    pitch: 'SQL exercises on Postgres and SQL Server, with a leaderboard to make it hurt',
    category: 'run',
    href: 'https://itenium.be/blog/databases/sql-training/',
    hrefLabel: 'Read the post',
    github: 'https://github.com/itenium-be/sql-training',
    snippet: 'docker compose up -d --build',
    tags: ['SQL', 'Docker'],
  },
  {
    slug: 'meme-poster',
    name: 'Meme Poster',
    pitch: 'A random meme into Slack, on a timer',
    category: 'run',
    href: 'https://itenium.be/blog/ai/the-itenium-slack-meme-bot-with-claude-code/',
    hrefLabel: 'Read the post',
    github: 'https://github.com/itenium-be/meme-poster',
    tags: ['TypeScript', 'Slack'],
  },
  {
    slug: 'scout',
    name: 'Scout',
    pitch: 'A self-hosted deep research agent that files its findings for you',
    category: 'run',
    href: 'https://laoujin.github.io/Scout/',
    hrefLabel: 'Open the site',
    github: 'https://github.com/Laoujin/Scout',
    tags: ['Claude Code', 'Self-hosted'],
  },
  {
    slug: 'meridian',
    name: 'Meridian',
    pitch: 'A scroll-driven memory timeline that draws your travels on a map',
    category: 'run',
    href: 'https://laoujin.github.io/Meridian/',
    hrefLabel: 'Open the site',
    github: 'https://github.com/Laoujin/Meridian',
    tags: ['TypeScript', 'Self-hosted'],
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/data/projects.ts && git commit -m "Add project catalog"
```

---

### Task 3: Base layout and design tokens

**Files:**
- Create: `src/layouts/Base.astro`

- [ ] **Step 1: Write the layout**

Holds `<head>` (meta, OG, fonts), the token `:root` block, and global element resets. Tokens per spec: ground `#1A1817`, surface `#2D2A28`, accent `#E78200`, secondary `#6ebca5`, text `#FCFCFC`, muted `#7E7E7E`. Fonts Rubik / Inter / IBM Plex Mono from Google Fonts with real fallback stacks.

- [ ] **Step 2: Verify**

Run: `bun run build` — expected exit 0.

- [ ] **Step 3: Commit**

```bash
git add src/layouts/Base.astro && git commit -m "Add base layout with itenium design tokens"
```

---

### Task 4: ProjectCard

**Files:**
- Create: `src/components/ProjectCard.astro`

- [ ] **Step 1: Write the component**

Props: one `Project`. Renders art (16:9, `public/img/<slug>.webp`, `loading="lazy"`), name, pitch, tag chips, primary button (`href` + `hrefLabel`; rendered as a disabled span when `status === 'wip'`), a GitHub link on every card, and the `snippet` in a `<code>` block when present.

Image fallback: when the webp is missing the tile shows a deterministic gradient derived from the slug, so no card renders a broken image. Implement by putting the gradient on the wrapper and letting the `<img>` sit on top with `onerror` hiding itself.

- [ ] **Step 2: Verify** — `bun run build` exits 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/ProjectCard.astro && git commit -m "Add ProjectCard component"
```

---

### Task 5: Section and BlogTile

**Files:**
- Create: `src/components/Section.astro`, `src/components/BlogTile.astro`

- [ ] **Step 1: Section.astro** — props `title`, `intro`, and the projects for that category; renders a heading, the intro line, and a responsive `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))` of cards.

- [ ] **Step 2: BlogTile.astro** — full-width tile linking `https://itenium.be/blog`, headline "The itenium blog", line "Behind-the-scenes and deep tech insights", accent border.

- [ ] **Step 3: Verify** — `bun run build` exits 0.

- [ ] **Step 4: Commit**

```bash
git add src/components && git commit -m "Add Section and BlogTile components"
```

---

### Task 6: The page

**Files:**
- Create: `src/pages/index.astro`

- [ ] **Step 1: Compose** — hero (image, itenium logo, Rubik headline, one-line sub), BlogTile, then `sections.map` rendering a `Section` per category filtered from `projects`, then a footer linking itenium.be and the GitHub org.

- [ ] **Step 2: Verify content**

```bash
bun run build
grep -c 'project-card' dist/index.html   # expect 12
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro && git commit -m "Compose landing page"
```

---

### Task 7: Midjourney prompts

**Files:**
- Create: `Midjourney.md`

- [ ] **Step 1: Write the house-style recipe** — shared suffix pinning `--ar 16:9 --style raw` and one `--sref` seed, plus the fixed style clause (single subject, warm charcoal ground, orange key light, isometric 3D render, no text, no logos).

- [ ] **Step 2: Write 13 prompts** — one hero (wide) and one per project, each ending in the shared suffix.

- [ ] **Step 3: Commit**

```bash
git add Midjourney.md && git commit -m "Add Midjourney prompts for hero and project art"
```

---

### Task 8: Deployment

**Files:**
- Create: `public/CNAME`, `.github/workflows/deploy.yml`

- [ ] **Step 1: CNAME**

```
dev.itenium.be
```

- [ ] **Step 2: Workflow** — `withastro/action@v3` on push to the default branch, then `actions/deploy-pages@v4`, with `permissions: {contents: read, pages: write, id-token: write}`.

- [ ] **Step 3: Verify** — `bun run build && test -f dist/CNAME`

- [ ] **Step 4: Commit**

```bash
git add public/CNAME .github && git commit -m "Add Pages deployment workflow"
```

---

### Task 9: Browser verification

- [ ] **Step 1:** `bun run dev`, then assert in the browser with `browser_evaluate` — 12 cards present, every card has a GitHub link, the wip card's button is disabled, no console errors.

- [ ] **Step 2:** Report the local URL for visual review.

---

### Task 10: Publish

Blocked on a decision: dedicated repo versus the archived org root repo `itenium-be.github.io`. Resolve with the user, then push and enable Pages. DNS for `dev.itenium.be` must be pointed at GitHub Pages by the user; the domain will not resolve until then.
