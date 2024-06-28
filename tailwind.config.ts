import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

/*
 * /** @type {import('postcss-load-config').Config} 
const config = {
  plugins: {
    tailwindcss: {config:'./tailwindcss.config.mjs'},
    autoprefixer: {},
  },
};

export default config;

 */