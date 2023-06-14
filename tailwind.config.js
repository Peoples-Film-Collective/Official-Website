/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        red: "#ef1d26",
        black: "#000",
        gray: {
          "100": "rgba(0, 0, 0, 0.6)",
          "200": "rgba(255, 255, 255, 0.31)",
          "300": "rgba(0, 0, 0, 0.21)",
          "400": "rgba(255, 255, 255, 0.9)",
        },
        tan: {
          "100": "#a8a78b",
          "200": "rgba(182, 181, 133, 0.87)",
        },
        darkgray: "#9aafa8",
        sienna: "#813928",
        darkslategray: "#3c6771",
      },
      fontFamily: {
        inter: "Inter",
        helvetica: "Helvetica",
        larsseit: "Larsseit",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      smi: "13px",
      "21xl": "40px",
      "5xl": "24px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
