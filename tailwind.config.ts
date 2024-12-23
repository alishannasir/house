import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textColor: "var(--text-color)", 
        textHoverColor: "var(--text-hover-color)", 
        borderColor: "var(--border-color)", 
        backgroundOneColor: "var(--background-one-color)", 
        backgroundTwoColor: "var(--background-two-color)", 
      },
    },
  },
  plugins: [],
} satisfies Config;
