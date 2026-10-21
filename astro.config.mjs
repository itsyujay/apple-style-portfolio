import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://apple-style-portfolio.yujay.dev',
  integrations: [tailwind(), react()],
});