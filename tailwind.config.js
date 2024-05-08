/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      manRope: ["Manrope", "sans-serif"],
      grace: ["Covered By Your Grace", "sans-serif"],
    },
    extend: {
      colors: {
        whiteshGray: "#EAEAEA",
        lightGrey: "#4E4E4E",
        darkGrey: "#1C1C1C",
        darkGreen: "#002E18",
        textLight:"#828282",
        green: "#2DA950",
        mintGreen: "#E8EEE7",
      },
    },
  },
  plugins: [],
};
