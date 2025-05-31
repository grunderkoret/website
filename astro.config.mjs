// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ppkor.no',
  redirects: {
    '/j': 'https://www.linkedin.com/company/gr%C3%BCnderkoret-perfect-pitch/',
    '/join':
      'https://www.linkedin.com/company/gr%C3%BCnderkoret-perfect-pitch/',
    '/bli-medlem':
      'https://www.linkedin.com/company/gr%C3%BCnderkoret-perfect-pitch/',
  },
});
