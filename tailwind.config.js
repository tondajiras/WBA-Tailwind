/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'alfa': ["Alfa Slab One", 'serif'],
      'dm': ["DM Sans", 'sans-serif'],
    },
    extend: {
      height:{
        '768': '768px',
      },
      width:{
        '170': '170px',
      },
      borderWidth: {
        '1': '1px',
      },
      lineHeight:{
        '80': '80px',
      },
      colors:{
        'primary': '#BE6361',
        'tBlack': '#333333',
      },
    },
  },
  plugins: [],
}

