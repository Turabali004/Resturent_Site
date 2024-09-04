/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00BCA8',    // Light teal color
        secondary: '#333333',  // Dark gray color
        accent: '#000000',     // Black color
        background: '#FFFFFF', // White background color
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Montserrat for general use
        custom: ['"Fede Ro"', 'sans-serif'], // Fede Ro as a custom font
      },
    },
  },
  plugins: [],
}