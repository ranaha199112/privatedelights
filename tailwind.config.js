/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // corePlugins: {
  //   preflight: false,
  // },
  important: "#__next",
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "custom-gray": "#f5f5f5",
        "custom-red": "#ff0000",
        "custom-yellow": "#ffdd57",
        "custom-rose": "#ff3860",
        "custom-indigo": "#4f6df5",
      },
      boxShadow: {
        "custom-bottom": " 0 3px 5px 0 rgba(0, 0, 0, .3)",
      },
    },
  },
  plugins: [],
};
