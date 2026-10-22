import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07070d",
          900: "#0b0b14",
          850: "#10101c",
          800: "#151524",
          700: "#1d1d30",
          600: "#2a2a44",
        },
        accent: {
          DEFAULT: "#8b5cf6",
          soft: "#a78bfa",
        },
        aqua: "#22d3ee",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(139, 92, 246, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
