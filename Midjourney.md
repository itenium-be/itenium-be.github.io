# Midjourney prompts — dev.itenium.be

13 images: one wide hero, one 16:9 tile per project. They only read as a set if
they share a recipe, so every prompt below ends with the same suffix.

## Workflow

Generate the hero first. Pick the variation you like, grab its URL, and use it
as the `--sref` for all twelve tiles — that is what keeps the palette and
lighting consistent across the set. Until then the placeholder below works.

```
--ar 16:9 --style raw --stylize 250 --sref 3141592
```

Replace `3141592` with the hero's image URL once you have it.

Save results as `public/img/<slug>.webp` using the slugs in the table. Any
missing file falls back to a generated gradient tile, so partial sets are fine.

## House style

Every prompt inherits this clause, already inlined below:

> isometric 3d render, single subject centered, warm charcoal background,
> orange key light from the upper right, soft teal rim light, matte surfaces,
> shallow depth of field, no text, no letters, no logos, no watermark

## Hero

Wider crop than the tiles.

```
a workshop bench seen from above, scattered developer tools rendered as small
polished objects — a wrench, a magnifier, a terminal cursor, a paper stack —
arranged with deliberate craft, isometric 3d render, single subject centered,
warm charcoal background, orange key light from the upper right, soft teal rim
light, matte surfaces, shallow depth of field, no text, no letters, no logos,
no watermark --ar 21:9 --style raw --stylize 250
```

Save as `public/img/hero.webp`.

## Tiles

| Slug | Prompt subject |
| ---- | -------------- |
| `qrgenerator` | a glossy qr code tile bending into a ribbon, chips of color peeling off its corner |
| `presentations` | a stack of translucent glass slides fanned out like a deck of cards, one lit from within |
| `pdfmerge` | two paper stacks interleaving into a single clean stack, sheets suspended mid-air |
| `starify-links` | a chain of links with small enamel star badges clipped onto each one |
| `yoink` | a tiny stage curtain opening on a glowing notification bubble, confetti frozen mid-burst |
| `mi-ke` | a mechanical keyboard with three keys lifted and hovering, thin light trails beneath them |
| `git-numberedadd` | a row of numbered file tiles on a rail, one pulled forward and highlighted |
| `date-holidays-be` | a wall calendar with several days raised into small physical blocks |
| `sql-training` | a database cylinder split open like a training dummy, a small podium beside it |
| `meme-poster` | a mail chute dropping a framed picture into a chat window, timer gear behind it |
| `scout` | a brass surveying instrument on a tripod scanning a field of floating documents |
| `meridian` | a curved timeline ribbon over a dark relief map, small photo cards pinned along it |

Each row becomes:

```
<subject>, isometric 3d render, single subject centered, warm charcoal
background, orange key light from the upper right, soft teal rim light, matte
surfaces, shallow depth of field, no text, no letters, no logos, no watermark
--ar 16:9 --style raw --stylize 250 --sref <hero url>
```
