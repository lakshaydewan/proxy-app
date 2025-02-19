/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Include all files in the app directory
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Include all files in the pages directory
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Include all files in the components directory
    // Add other directories or files as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
 }
 