import type { Config } from "tailwindcss";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#07080B",
        surface: "#12141B",
        "surface-raised": "#181B24",
        ink: "#ECE8DE",
        muted: "#868C99",
        marigold: "#F2A63C",
        circuit: "#35E0C9",
        signal: "#E23F7E",
        line: "#22252F",
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "var(--font-manrope)", "sans-serif"],
        oxanium: ["var(--font-oxanium)", "monospace"],
        space: ["var(--font-space-grotesk)", "sans-serif"],
        sora: ["var(--font-sora)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
