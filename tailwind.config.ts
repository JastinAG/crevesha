import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1f122b",
          secondary: "#8f681f",
          white: "#ffffff",
        },
        surface: "#f8f9ff",
        "surface-bright": "#f8f9ff",
        "surface-variant": "#d3e4fe",
        "on-primary-container": "#8f7d9c",
        "on-surface": "#0b1c30",
        "on-surface-variant": "#4a454c",
        "secondary-container": "#ffcc7a",
        "outline-variant": "#ccc4cd",
        background: "#f8f9ff",
      },
      maxWidth: {
        site: "1200px",
      },
      fontSize: {
        "display-lg": [
          "48px",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-lg-mobile": [
          "36px",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "1.2", fontWeight: "600" }],
        "label-md": [
          "14px",
          { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "500" },
        ],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
      },
      spacing: {
        section: "5rem",
        "section-lg": "7rem",
        md: "24px",
        lg: "48px",
        xl: "80px",
        sm: "12px",
        xs: "4px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        brand: "10px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(31, 18, 43, 0.08)",
        "card-hover": "0 12px 40px rgba(31, 18, 43, 0.12)",
        lift: "0 8px 30px rgba(143, 104, 31, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
