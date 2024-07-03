/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Minecraft"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
