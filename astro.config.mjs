import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://recordstores.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      changefreq: 'weekly',
      priority: 0.7,
      serialize: (item) => {
        if (item.url.includes('/city/') || item.url.includes('/store/')) {
          item.priority = 0.8;
        }
        if (item.url === 'https://recordstores.com/') {
          item.priority = 1.0;
        }
        return item;
      }
    })
  ],
  output: 'static',
  build: {
    format: 'directory'
  }
});
