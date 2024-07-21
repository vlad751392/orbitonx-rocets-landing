/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'white-12': 'rgba(255, 255, 255, 0.12)',
      },
      backdropFilter: {
        'blur': 'blur(10px)',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(275deg, #FBDBE5 0%, #D4ADFF 47%, #DDE1FF 100%)',
      },
      textFillColor: {
        'transparent': 'transparent',
      },
    },
    variants: {
      backdropFilter: ['responsive'],
    },
    fontFamily: {
      'neue': ['BaseNeue', 'sans-serif'],
      'mont': ['Montserrat', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
    },
    colors: {
      pink: {
        regular: "#FFDDF6"
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-text-fill'),
    require('tailwindcss-filters'),
  ],
}