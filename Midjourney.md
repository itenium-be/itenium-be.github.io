# Midjourney prompts — dev.itenium.be

Twelve card images, one per tool. Every prompt below is complete and ready to
paste into Midjourney as-is: subject, house style, and the shared `--sref` that
keeps the set matching the hero.

## The sref

```
--sref https://cdn.midjourney.com/1728f718-86de-4944-9e81-09412947428a/0_2.png
```

Copied from the Midjourney web UI off the hero generation. It is already
inlined in all twelve prompts below, so each one is a single paste.

To replace it later, swap every copy at once:

```sh
sed -i 's|<old url>|<new url>|g' Midjourney.md
```

The hero itself is already done: `public/img/hero.webp`, 1680x720.

## After generating

```sh
cwebp -q 82 midjourney-raw/<downloaded>.png -o public/img/<slug>.webp
git add public/img && git commit -m "Add <slug> card art" && git push
```

The slug for each prompt is in its heading. A tool whose image is missing falls
back to a generated gradient tile, so partial batches deploy fine.

---

## PDF Workbench

`public/img/pdfmerge.webp`

```
two paper stacks interleaving into a single clean stack, sheets suspended mid-air, isometric 3d render, single subject centered, warm charcoal background, orange key light from the upper right, soft teal rim light, matte surfaces, shallow depth of field, no text, no letters, no logos, no watermark --ar 16:9 --style raw --stylize 250 --sref https://cdn.midjourney.com/1728f718-86de-4944-9e81-09412947428a/0_2.png
```

## QRGenerator

`public/img/qrgenerator.webp`

```
a glossy qr code tile bending into a ribbon, chips of color peeling off its corner, isometric 3d render, single subject centered, warm charcoal background, orange key light from the upper right, soft teal rim light, matte surfaces, shallow depth of field, no text, no letters, no logos, no watermark --ar 16:9 --style raw --stylize 250 --sref https://cdn.midjourney.com/1728f718-86de-4944-9e81-09412947428a/0_2.png
```

## Presentations

`public/img/presentations.webp`

```
a stack of translucent glass slides fanned out like a deck of cards, one lit from within, isometric 3d render, single subject centered, warm charcoal background, orange key light from the upper right, soft teal rim light, matte surfaces, shallow depth of field, no text, no letters, no logos, no watermark --ar 16:9 --style raw --stylize 250 --sref https://cdn.midjourney.com/1728f718-86de-4944-9e81-09412947428a/0_2.png
```

## Starify Links

`public/img/starify-links.webp`

```
a chain of links with small enamel star badges clipped onto each one, isometric 3d render, single subject centered, warm charcoal background, orange key light from the upper right, soft teal rim light, matte surfaces, shallow depth of field, no text, no letters, no logos, no watermark --ar 16:9 --style raw --stylize 250 --sref https://cdn.midjourney.com/1728f718-86de-4944-9e81-09412947428a/0_2.png
```

## Yoink

`public/img/yoink.webp`

```
a tiny stage curtain opening on a glowing notification bubble, confetti frozen mid-burst, isometric 3d render, single subject centered, warm charcoal background, orange key light from the upper right, soft teal rim light, matte surfaces, shallow depth of field, no text, no letters, no logos, no watermark --ar 16:9 --style raw --stylize 250 --sref https://cdn.midjourney.com/1728f718-86de-4944-9e81-09412947428a/0_2.png
```

## Mi-Ke

`public/img/mi-ke.webp`

```
a mechanical keyboard with three keys lifted and hovering, thin light trails beneath them, isometric 3d render, single subject centered, warm charcoal background, orange key light from the upper right, soft teal rim light, matte surfaces, shallow depth of field, no text, no letters, no logos, no watermark --ar 16:9 --style raw --stylize 250 --sref https://cdn.midjourney.com/1728f718-86de-4944-9e81-09412947428a/0_2.png
```

## Git-NumberedAdd

`public/img/git-numberedadd.webp`

```
a row of numbered file tiles on a rail, one pulled forward and highlighted, isometric 3d render, single subject centered, warm charcoal background, orange key light from the upper right, soft teal rim light, matte surfaces, shallow depth of field, no text, no letters, no logos, no watermark --ar 16:9 --style raw --stylize 250 --sref https://cdn.midjourney.com/1728f718-86de-4944-9e81-09412947428a/0_2.png
```

## date-holidays-be

`public/img/date-holidays-be.webp`

```
a wall calendar with several days raised into small physical blocks, isometric 3d render, single subject centered, warm charcoal background, orange key light from the upper right, soft teal rim light, matte surfaces, shallow depth of field, no text, no letters, no logos, no watermark --ar 16:9 --style raw --stylize 250 --sref https://cdn.midjourney.com/1728f718-86de-4944-9e81-09412947428a/0_2.png
```

## SQL Training

`public/img/sql-training.webp`

```
a database cylinder split open like a training dummy, a small podium beside it, isometric 3d render, single subject centered, warm charcoal background, orange key light from the upper right, soft teal rim light, matte surfaces, shallow depth of field, no text, no letters, no logos, no watermark --ar 16:9 --style raw --stylize 250 --sref https://cdn.midjourney.com/1728f718-86de-4944-9e81-09412947428a/0_2.png
```

## Meme Poster

`public/img/meme-poster.webp`

```
a mail chute dropping a framed picture into a chat window, timer gear behind it, isometric 3d render, single subject centered, warm charcoal background, orange key light from the upper right, soft teal rim light, matte surfaces, shallow depth of field, no text, no letters, no logos, no watermark --ar 16:9 --style raw --stylize 250 --sref https://cdn.midjourney.com/1728f718-86de-4944-9e81-09412947428a/0_2.png
```

## Scout

`public/img/scout.webp`

```
a brass surveying instrument on a tripod scanning a field of floating documents, isometric 3d render, single subject centered, warm charcoal background, orange key light from the upper right, soft teal rim light, matte surfaces, shallow depth of field, no text, no letters, no logos, no watermark --ar 16:9 --style raw --stylize 250 --sref https://cdn.midjourney.com/1728f718-86de-4944-9e81-09412947428a/0_2.png
```

## Meridian

`public/img/meridian.webp`

```
a curved timeline ribbon over a dark relief map, small photo cards pinned along it, isometric 3d render, single subject centered, warm charcoal background, orange key light from the upper right, soft teal rim light, matte surfaces, shallow depth of field, no text, no letters, no logos, no watermark --ar 16:9 --style raw --stylize 250 --sref https://cdn.midjourney.com/1728f718-86de-4944-9e81-09412947428a/0_2.png
```
