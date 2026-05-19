/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080209",
        primary: "#BFE169",
        text: {
          DEFAULT: "#EAEAEA",
          muted: "#BFC7C2",
        },
        accent: "#BFE169",
      },
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"],
        syne: ["'Syne'", "sans-serif"],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(191, 225, 105, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(191, 225, 105, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
