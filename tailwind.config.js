/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "dark": "#262626",
        "gray": "#b2b2b2",
        "dark-v2": "#0A0A0A",
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2.5rem',
        xl: '3.5rem',
        '2xl': '4rem',
      },
    },
    fontFamily: {
      "sec": "Roboto, serif",
    }
  },
  plugins: [],
}

