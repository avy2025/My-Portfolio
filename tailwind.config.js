/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000F08",
        primary: "#FB3640",
        text: {
          DEFAULT: "#EAEAEA",
          muted: "#BFC7C2",
        },
        accent: "#FB3640",
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
          '0%': { boxShadow: '0 0 5px rgba(251, 54, 64, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(251, 54, 64, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
