module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.{js, ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: 'Poppins, sans-serif'
    },
    extend: {
      colors: {
        'primary': '#4640DE',
        'secondary': '#F6F6FD',
        'grey': '#ABB3C4',
        'dark': '#121F3E',
        'page': '#F8F8FA',
        'success': '#2ED16C',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
