import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import compress from "astro-compress";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }),, react({
    experimentalReactChildren: true
  }), icon()]
});