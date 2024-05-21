/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '370px',
      md: '568px',
      lg: '998px',
      xl: '1024px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        mania: ['Metal Mania', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
