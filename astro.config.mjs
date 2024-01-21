import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }),, react({
    experimentalReactChildren: true
  }), compress({
      CSS: true,
			HTML: true,
			Image: true,
			JavaScript: true,
			SVG: true,
    })]
});