/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dblue: "#1d75de",
        ddark: "#000000",
        dlight: "#ffffff",
        pgreen: "#1DB954",
        dgreen: "#056952",
        lgreen: "#C5F0C9",
        ldark: "#191414",
        lgray: "#918D74",
      },
    },
  },
  plugins: [],
};
