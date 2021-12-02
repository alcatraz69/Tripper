module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          450: '#23B5B5'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
