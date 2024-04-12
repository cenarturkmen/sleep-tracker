/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#fd5634',
        'custom-black': '#0d0d0d'
      }
    }
  },
  plugins: [],
}