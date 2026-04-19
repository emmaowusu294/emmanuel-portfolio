// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0f16", // Deep, dark slate black
        primary: "#1e3a8a", // Subtle deep blue for gradients
        accent: "#ffffff", // Crisp white
      },
      fontFamily: {
        heading: ['"Cabinet Grotesk"', "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
