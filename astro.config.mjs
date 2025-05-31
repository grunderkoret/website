// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ppkor.no',
  redirects: {
    '/j': 'https://tally.so/r/wk1gAr',
    '/join': 'https://tally.so/r/wk1gAr',
    '/bli-medlem': 'https://tally.so/r/wk1gAr',
  },
});
