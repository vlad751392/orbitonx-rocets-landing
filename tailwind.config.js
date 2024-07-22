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
      boxShadow: {
        'custom-shadow-blue': '-1px -2px 30px 20px rgba(55, 61, 212, 0.5)',
        'custom-shadow-blue-hover': '-1px -2px 40px 30px rgba(55, 61, 212, 0.7)',
        'custom-shadow-pruple': '-1px -2px 40px 30px rgba(124, 55, 212, 0.5)',
        'custom-shadow-orange': '-1px -2px 40px 30px rgba(255, 149, 1, 0.5)',
        'custom-shadow-orange-hover': '-1px -2px 40px 30px rgba(255, 149, 1, 0.7)',
        'custom-shadow-pruple-hover': '-1px -2px 40px 30px rgba(124, 55, 212, 0.7)',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/png/banner-bg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontSize: {
        "adptive-m": "calc(21px + 6 * (100vw /1280))",
        "adptive-ml": "calc(29px + 10 * (100vw /1280))",
        "adptive-l": "calc(16px + 16 * (100vw /1280))",
        "adptive-2l": "calc(38px + 16 * (100vw /1280))",
        "adptive-xl": "calc(36px + 12 * (100vw /1280))",
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