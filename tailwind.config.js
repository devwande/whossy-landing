/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        red: "#F2243E",
        gray: "#8A8A8E",
      },
      fontSize:{
        '7.5xl': ['88px','92px']
      },
    },
  },
  plugins: [],
}

