/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7C3AED',
          dark: '#0F0F0F'
        }
      },
      screens: {
        xs: '480px'
      },
      borderRadius: {
        '6': '6px'
      },
      fontFamily: {
        mont: ['Mont', 'sans-serif']
      }
    }
  },
  plugins: []
};
