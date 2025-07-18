/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Solway", "serif"],
        sans: ["DM Mono", "monospace"],
        mono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
