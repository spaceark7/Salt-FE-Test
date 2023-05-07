/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/static/images/hero.svg')",
        'hero-bottom-bg': "url('/static/images/Background.svg')",
        footer: "url('/static/images/Footer.png')",
      },
      colors: {
        primary: '#1BA0E1',
      },
    },
  },
  plugins: [],
}
