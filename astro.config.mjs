// VEON demo base: technical setup only. Visual design comes from design/concept.md of each client.
// One-page demo: assets are referenced relatively (./_astro/…) and CSS is inlined, so dist/ opens from a subfolder
// (GitHub Pages) and from file:// alike.
import { defineConfig } from "astro/config";

export default defineConfig({
  build: { inlineStylesheets: "always", assetsPrefix: "." },
  compressHTML: true,
  devToolbar: { enabled: false },
});
