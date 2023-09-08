module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xxl': {'max': '1450px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '900px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '428px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
