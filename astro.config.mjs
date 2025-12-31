// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://vietkhoa-dev.github.io',
  base: '/',
  // Tailwind v4 Vite plugin
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // Shiki configuration
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },

  }
});