import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '344px',
      // => @media (min-width: 576px) { ... }

      'md': '740px',
      // => @media (min-width: 960px) { ... }

      'lg': '1022px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
            sans: ['var(--font-inter)', 'sans-serif'], // For Inter
        mono: ['var(--font-roboto-mono)', 'monospace'], // For Roboto Mono
        code: ['var(--font-fira-code)', 'monospace'], // For Fira Code
      },
    }
  },
  plugins: [],
};
export default config;
