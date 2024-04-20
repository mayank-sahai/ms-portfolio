/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // // custom class for utilities
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     '.font-cursive': {
    //       fontFamily: 'cursive',
    //     },
    //     '.font-fantasy': {
    //       fontFamily: 'fantasy',
    //     },
    //   };

    //   addUtilities(newUtilities, ['responsive', 'hover']);
    // },

  ],
}

