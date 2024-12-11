import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), sitemap()],
    site: 'https://example.com',
    srcDir: '.',
    vite: {
        plugins: [tailwindcss()],
    },
});
