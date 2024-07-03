/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Aleo"', ...defaultTheme.fontFamily.sans],
        sans: ['"Minecraft"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
