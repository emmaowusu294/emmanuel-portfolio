// tailwind.config.js
// "Ink & Signal" design tokens. Values live as CSS variables in src/index.css.
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)", // page background
        surface: "var(--color-surface)", // raised surfaces, image plates, inputs
        line: "var(--color-line)", // decorative borders and dividers
        control: "var(--color-control)", // form-control borders (3:1 against ink)
        paper: "var(--color-paper)", // primary text
        muted: "var(--color-muted)", // secondary text
        signal: {
          DEFAULT: "var(--color-signal)", // amber accent
          hover: "var(--color-signal-hover)",
          pressed: "var(--color-signal-pressed)",
        },
      },
      fontFamily: {
        heading: ['"Cabinet Grotesk"', "system-ui", "sans-serif"],
        body: ["Roboto", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "75rem",
      },
    },
  },
  plugins: [],
};
