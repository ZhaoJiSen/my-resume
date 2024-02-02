import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    base: 'my-resume',
    publicDir: './public',
    integrations: [solidJs(), tailwind()],
});
