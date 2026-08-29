import { defineConfig } from 'astro/config'

// Until DNS for dev.itenium.be exists, the org root repo serves this at
// itenium-be.github.io. Flip `site` and restore CNAME.pending to public/CNAME
// once the record is in place.
export default defineConfig({
  site: 'https://itenium-be.github.io',
})
