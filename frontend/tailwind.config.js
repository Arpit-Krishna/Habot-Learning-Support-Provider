// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // force dark mode using 'dark' class
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        accent: '#38bdf8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
