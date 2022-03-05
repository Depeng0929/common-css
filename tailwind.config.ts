import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  extract: {
    include: [
      'src/**/*.{vue,ts,tsx,js,jsx}'
    ],
    exclude: [
      '.git',
      'dist',
      'node_modules'
    ],
  },
  plugins: [
    typography,
  ],
  shortcuts: {
    'button': 'h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900',
  },
  attributify: true,
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            a: { color: 'inherit' },
            b: { color: 'inherit' },
            code: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            blockquote: { color: 'inherit' },
          },
        },
      },
    },
  },
})