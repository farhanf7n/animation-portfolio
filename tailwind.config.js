import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "lime-accent": "#e8ff85",
      },
      fontFamily: {
        "jetbrains-mono": ["JetBrains Mono", "monospace"],
        "bluu-next": ["Bluu Next", "serif"],
        caveat: ["Caveat", "cursive"],
      },
      backgroundImage: {
        noise: "url('/src/assets/patterns/noise.svg')",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
