/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        farm: {
          green: '#4d7c0f',
          brown: '#8b4513',
        }
      }
    },
  },
  plugins: [],
}