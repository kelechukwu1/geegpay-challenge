/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/helper/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main Colors
        primary: "#34CAA5",
        secondary: "#0D062D",
        // Alerts
        success: "#66C87B",
        error: "#ED544E",
        warning: "#F4C700",

        // Neutral
        background: "#EBECF2",
      },
      screens: {
        xxs: "320px",
        xs: "360px",
      },
    },
  },
  plugins: [],
};
