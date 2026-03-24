/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // <- Include index.html
    "./src/**/*.{js,ts,jsx,tsx}", // <- Add jsx and tsx support
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
