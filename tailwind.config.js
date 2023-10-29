/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      accent: "#A445ED",
      error: "#FF5252",
      darkNeutral: {
        base: "#050505",
        lighten1: "#050505",
        lighten2: "#2D2D2D",
        lighten3: "#3A3A3A",
      },
      lightNeutral: {
        base: "#FFFFFF",
        lighten1: "#F4F4F4",
        lighten2: "#E9E9E9",
        lighten3: "#757575",
      },
    },
    extend: {},
  },
  plugins: [],
};
