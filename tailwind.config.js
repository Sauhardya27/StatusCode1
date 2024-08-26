const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|modal|divider).js"
  ],
  theme: {
    extend: {
      colors: {
        faqColor: "#C5D8F1",
        faqTitle: "#2C438A",
        cGoldBack: "#F0DA69",
        cGoldFront: "#D3B51B",
        cPinkBack: "#E7C2D4",
        cPinkFront: "#C488A5",
        cGreenBack: "#A3DAC2",
        cGreenFront: "#70A58E",
        cBlueFront: "#5B88C5",
        aimBg: "#846DA2",
        blueCard: "#92BDF6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [nextui()],
}

