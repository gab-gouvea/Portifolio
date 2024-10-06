/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: [
            "Danfo", "serif;"
        ],
        texto: [
          "Poppins", "sans-serif;"
        ]
      },
      colors: {
        background: "#09090B",
        texts: "#FAFAFA"
      }
    },
  },
  plugins: [],
}