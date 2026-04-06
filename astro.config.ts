import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',
  site: 'https://takumi-watanabe-ai.github.io',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
