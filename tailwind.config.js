/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008ECC",
        heading: "#222222",
        ctext: "#666666",
        background_1: "#F5F5F5",
        background_3: "#F3F9FB",
        border: "#EDEDED",
        line: "#D9D9D9",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        autofit: "repeat(auto-fit, minmax(224px, 1fr))",
      },
    },
  },
  plugins: [],
};
