/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      base: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", "SF Pro JP", "SF Pro Display", "SF Pro Icons", "Hiragino Kaku Gothic Pro", "AOS Icons", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'serif': ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      'script': ['Tangerine', 'cursive', 'sans-serif']
    },
    extend: {
      colors: {
        'black': {
          0: '#FFFFFF',
          200: '#D9D9D9',
          400: '#A4A4A4',
          600: '#6E6E6E',
          800: '#323232',
          1000: '#000000',
        },
      }
    },
  },
  plugins: [],
}