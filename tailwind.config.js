/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Satisfy', 'cursive'], // Add custom font family here
      },
      gradientColorStops: {
        '20%': '20%',
        '30%': '30%',
        '50%': '50%',
      },
    },
  },
  plugins: [],
}
