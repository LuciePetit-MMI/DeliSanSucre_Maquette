module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{html,js}',
      './**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    colors:{
      'primary': '#96D4A7',
      'secondary': '#42E9AF',
      'light': '#C6E4C6',
      'dark': '#407241',
      'white': '#FFFDF9',
      'black': '#2D4A2E',
    },
    fontFamily:{
      'fira':['"Fira Sans"'],
      'overpass':['Overpass',],
    },
    screens: {
      'mobil': '640px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1920px',
    },
    fill: {
      current: 'currentColor',
    },
    fill: theme => ({
      'primary': theme('colors.primary'),
      'secondary': theme('colors.secondary'),
      'light': theme('colors.light'),
      'dark': theme('colors.dark'),
      'white': theme('colors.white'),
      'black': theme('colors.black'),
    }),
    extend: {},
  },
  variants: {
    extend: {
    },
  },
  plugins: [
  ],
}
