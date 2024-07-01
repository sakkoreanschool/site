/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/*.md",
    "./layouts/**/*.html",
    ".themes/main/content/*.md",
    "./themes/main/layouts/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary-yellow': '#FAC835',
        'primary-dark-blue': '#070127'

      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

