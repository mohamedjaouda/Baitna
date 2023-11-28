/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans"],
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      transparent: "transparent",
      Primary500: "#003951",
      Primary400: "#04034C",
      Primary300: "#0294F3",
      Primary200: "#01E4F4",
      Primary100: "#01e4f4",
      Black1: "#000000",
      Black1: "#0E2027",
      Black1: "#282828",
      White: "#FFFFFF",
      Gray1: "#333333",
      Gray2: "#4F4F4F",
      Gray3: "#828282",
      Gray4: "#BDBDBD",
      Gray5: "#E0E0E0",
    },
    extend: {
      boxShadow: {
        custom: "0px 0px 5px 6px #eeeeee78",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
