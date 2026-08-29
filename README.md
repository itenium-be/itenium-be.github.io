itenium dev homepage
====================

The landing page for [dev.itenium.be](https://dev.itenium.be): every developer
tool itenium builds, in one index.

Currently served from https://itenium-be.github.io/ — see *Going live* below.

```sh
bun install
bun run dev
```

## Adding a project

One entry in [`src/data/projects.ts`](src/data/projects.ts) and one image at
`public/img/<slug>.webp`. `category` decides which section it lands in.
A project with no image falls back to a generated gradient tile.

Art prompts live in [Midjourney.md](Midjourney.md).

## Going live on dev.itenium.be

Two steps, once the DNS record exists:

1. Point `dev.itenium.be` at GitHub Pages (`CNAME` → `itenium-be.github.io`).
2. `git mv CNAME.pending public/CNAME` and set `site` in
   [`astro.config.mjs`](astro.config.mjs) back to `https://dev.itenium.be`.

This is the org root Pages repo, so that custom domain applies org-wide: every
project page moves to `dev.itenium.be/<repo>`, and GitHub 301-redirects the old
`itenium-be.github.io/<repo>` URLs to it.

The previous contents of this repo — the old Jekyll itenium.be site — now live
in [old-itenium-be](https://github.com/itenium-be/old-itenium-be).
