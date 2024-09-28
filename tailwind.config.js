/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    screens: {
      'xsm': '350px',
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'bs': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',


      '2xl-mx': { 'max': '1535px' },
      'xl-mx': { 'max': '1279px' },
      'lg-mx': { 'max': '1023px' },
      'bs-mx': { 'max': '899px' },
      'md-mx': { 'max': '767px' },
      'sm-mx': { 'max': '639px' },
      'xs-mx': { 'max': '475px' },
      'xsm-mx': { 'max': '349px' }
    },
    extend: {
      colors:{
        bgColor:"#0A192F",
        primaryColor:"#64FFDA",
        textColor:"#8892B0"
      }
    },
    colors:{
      bgColor:"#0A192F",
      primaryColor:"#64FFDA",
      textColor:"#8892B0",
      white:"#fff"
    }
  },
  plugins: [],
}

