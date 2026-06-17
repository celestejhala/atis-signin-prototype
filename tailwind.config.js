/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Futura PT"', 'Arial', 'sans-serif'],
        secondary: ['Arial', 'sans-serif'],
      },
      colors: {
        // Travel Alberta / ATIS palette pulled from the live site CSS
        ink: '#000000',
        slate: '#373c40',
        muted: '#a5acb0',
        line: '#dbdedf',
        cloud: '#f6f6f6',
        teal: {
          50: '#f7fffa',
          100: '#e6f7f5',
          200: '#cfefec',
        },
        accent: '#e3790b',
        // Travel Alberta primary (dark red) — interactive hover/active states
        primary: { 400: '#9c0f00', 500: '#6d1012' },
        danger: { DEFAULT: '#da1e28', soft: '#fff2f3' },
        success: { DEFAULT: '#24a148', soft: '#f7fffa' },
      },
    },
  },
  plugins: [],
}
