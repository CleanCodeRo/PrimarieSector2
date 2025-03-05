/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#08265f',
        secondaryBlue: '#03367e',
        ternaryBlue: "#1797e8",
      },
    },
  },
  plugins: [],
};
