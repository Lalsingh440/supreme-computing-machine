/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#051026",
        navy: "#0B1E3F",
        navyline: "#1E3A5F",
        paper: "#F7F5F0",
        stone: "#E8E4DA",
        ink: "#101820",
        gold: "#C9A227",
        goldbright: "#E0BC4A",
        alert: "#B42318",
      },
      fontFamily: {
        display: ["'Big Shoulders Display'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
    },
  },
  plugins: [],
};
