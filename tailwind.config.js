/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js, jsx}"],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

