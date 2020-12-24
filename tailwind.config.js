const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.blueGray,
      red: colors.red,
      green: colors.green,
      blue: colors.blue,
      yellow: colors.amber,
      black: colors.black,
      white: colors.white,
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
