/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors : {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        primary:" var(--color-primary)",
        secondary: "var(--color-secondary)"
      }
    }
  },
}

