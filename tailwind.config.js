/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        12: '12px',
        14: '14px',
        20: '20px',
        48: '48px',
        104: '104px'
      },
      colors: {
        'gray': '#444444',
        'skyBlue': '#00ACF1'
      },
    },
  },
  plugins: [],
}
