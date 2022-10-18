/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-light": "#8C8E90",
        "purple-light": "#B4A3D4",
      },
    },
  },
  plugins: [],
};
