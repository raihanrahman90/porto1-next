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
        background: "#FFFDF4",
        foreground: "var(--foreground)",
        second: "#08494B",
        purplePrimary: "#2F1F70",
        purpleSecondary: "#7579A4",
        purpleThird: "#44367F",
        purpleHighlight: "#DFFFF1",
        greenPrimary: "#4C9D8D",
        greenSecondary: "#08494B",

      },
      fontFamily: {
        spacegrotesk: ['Space Grotesk', 'sans-serif'],  // Add your custom font here
      },
      aspectRatio: {
        '3/2' : '3 / 2'
      }
    },
  },
  plugins: [],
};
export default config;
