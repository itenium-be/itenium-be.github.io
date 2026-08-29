# dev.itenium.be — landing page

Status: approved 2026-08-29

## Purpose

A single page that indexes the developer tooling itenium has built, so a
visitor can find a tool, understand what it does, and reach it in one click.

Out of scope: the ~80 session/talk repos (Presentations covers them with one
card), the Itenium-Forge private packages, search, filtering, tag pages, a CMS.

## Stack

Astro, static output, deployed to GitHub Pages behind the custom domain
`dev.itenium.be`. No client framework: the page ships as HTML and CSS.

## Structure

| File                               | Responsibility                                              |
| ---------------------------------- | ----------------------------------------------------------- |
| `src/data/projects.ts`             | Typed catalog. The only place a project is defined.          |
| `src/components/ProjectCard.astro` | One card: art, pitch, chips, primary button, GitHub, snippet |
| `src/components/BlogTile.astro`    | Full-width blog feature                                      |
| `src/components/Section.astro`     | Section heading, intro line, card grid                       |
| `src/layouts/Base.astro`           | Design tokens, fonts, meta and OG tags                       |
| `src/pages/index.astro`            | Hero, blog tile, three sections, footer                      |
| `public/img/`                      | Hero image and one image per project                         |
| `public/CNAME`                     | `dev.itenium.be`                                             |
| `Midjourney.md`                    | House-style recipe and per-image prompts                     |
| `.github/workflows/deploy.yml`     | Build and publish to Pages                                   |

Adding a project means one entry in `projects.ts` and one image. Nothing else
changes.

## Data model

```ts
type Category = 'use' | 'install' | 'run'

type Project = {
  slug: string        // also the image basename
  name: string
  pitch: string       // one line, no trailing period
  category: Category
  href?: string       // primary link; absent while unpublished
  hrefLabel: string   // button text, e.g. "Open" / "Add to Chrome"
  github: string
  snippet?: string    // install command, shown in a <code> block
  tags: string[]      // language and kind chips
  status?: 'wip'      // renders the card muted with the button disabled
}
```

`category` drives which section a card lands in, so ordering the page is a
matter of ordering the array.

## Catalog

### Use it now

| Project       | Primary link                            | GitHub                   |
| ------------- | --------------------------------------- | ------------------------ |
| QRGenerator   | `itenium-be.github.io/QRGenerator/`      | itenium-be/QRGenerator   |
| Presentations | `itenium-be.github.io/Presentations/`    | itenium-be/Presentations |
| PdfMerge      | none yet — `wip`                         | itenium-be/PdfMerge      |

### Install it

| Project          | Primary link           | Snippet                                    |
| ---------------- | ---------------------- | ------------------------------------------ |
| starify-links    | Chrome Web Store        | —                                          |
| Yoink            | Yoink Pages site        | `/plugin marketplace add itenium-be/Yoink` |
| Mi-Ke            | Mi-Ke Pages site        | `git clone …/Mi-Ke && .\mike.ahk`          |
| Git-NumberedAdd  | itenium.be blog post    | `Install-Module -Name Git-NumberedAdd`     |
| date-holidays-be | npm package             | `bun add @itenium/date-holidays-be`        |

### Run it yourself

| Project      | Primary link                     | GitHub                  |
| ------------ | -------------------------------- | ----------------------- |
| sql-training | itenium.be blog post              | itenium-be/sql-training |
| meme-poster  | itenium.be blog post              | itenium-be/meme-poster  |
| Scout        | `laoujin.github.io/Scout/`        | Laoujin/Scout           |
| Meridian     | `laoujin.github.io/Meridian/`     | Laoujin/Meridian        |

Scout and Meridian live under a personal account rather than the org. Accepted
deliberately: they ship as-is.

## Page order

Hero, blog tile, Use it now, Install it, Run it yourself, footer.

The blog tile sits above the tools because four cards use a blog post as their
primary link. Introducing the blog first makes those buttons read as further
reading rather than an unexplained jump offsite.

## Visual design

Sibling of itenium.be, not a clone: same logo and accent, its own layout.

| Token       | Value     | Source                          |
| ----------- | --------- | ------------------------------- |
| ground      | `#1A1817` | deeper cousin of the brand ink  |
| surface     | `#2D2A28` | itenium.be ink                  |
| accent      | `#E78200` | itenium logo orange             |
| secondary   | `#6ebca5` | itenium.be green                |
| text        | `#FCFCFC` | itenium.be off-white            |
| muted       | `#7E7E7E` | itenium logo grey               |

Rubik for headings, Inter for body, IBM Plex Mono for chips and snippets —
the three faces itenium.be already loads.

Cards are a responsive grid, art at 16:9 on top. The grid collapses to one
column on narrow screens.

## Imagery

Thirteen Midjourney images: one wide hero, one per project. They only read as a
set if they share a recipe, so `Midjourney.md` fixes the house style — single
subject, warm charcoal ground, orange key light, isometric 3D render, no text —
and pins one `--sref` seed across every prompt.

Images are committed as `.webp` under `public/img/`. A project without its image
yet falls back to a generated gradient tile keyed on the slug, so the page never
renders a broken image.

## Deployment

GitHub Actions builds on push to the default branch and publishes `dist/` to
Pages. `public/CNAME` carries `dev.itenium.be`, which requires a DNS record for
`dev.itenium.be` pointing at GitHub Pages before the domain resolves.

Which repository hosts this is open. Using the org root repo
`itenium-be.github.io` would set an org-wide custom domain and relocate every
project page under `dev.itenium.be/<repo>`; a dedicated repository avoids that.
