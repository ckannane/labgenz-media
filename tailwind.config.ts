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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Minimalist dark theme
        dark: {
          primary: '#000000',
          secondary: '#1a1a1a',
          tertiary: '#2a2a2a',
          accent: '#333333',
          light: '#4a4a4a',
          surface: '#1a1a1a',
        },
        // Cyan accent color
        cyan: {
          400: '#00ffff',
          500: '#00cccc',
          600: '#00a3a3',
        },
        // Gray scale
        gray: {
          50: '#f9f9f9',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#999999',
          400: '#808080',
          500: '#666666',
          600: '#4a4a4a',
          700: '#333333',
          800: '#2a2a2a',
          900: '#1a1a1a',
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0, 255, 255, 0.4), 0 0 40px rgba(0, 255, 255, 0.1)',
        'cyan-border': '0 0 10px rgba(0, 255, 255, 0.2)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
