/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        'custom': '1630px', // Define um breakpoint chamado 'custom' para 1630px
      },
    },
  },
  plugins: [],
}

