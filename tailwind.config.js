/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'group-photo': "url('/src/images/NW-grou-photo 1.png')",
      }
    },
  },
  plugins: [],
}

