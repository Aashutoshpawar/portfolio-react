/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Add dark mode variants for your styles
      backgroundColor: {
        dark: '#1A1A1A', // Example dark background color
      },
      textColor: {
        dark: '#fff', // Example dark text color
      },
      // ... other theme extensions
    },
  },
  plugins: [],
  darkMode:"class",
};