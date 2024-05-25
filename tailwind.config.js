/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-999": "#020617",
        "blue-999": "#00B2D8",
        "pink-999": "#EC008C",
      },
    },
  },
  plugins: [],
};
