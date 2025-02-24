/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '820px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1025px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        'navlg': '940px',
      },
      colors:{
        primarycolor: '#121212',
        secondarycolor: '#C2410C',
    
        fontprimary: '#E5E7EB',
        fontsecondary: '#9CA3AF',
        fontbody: '#707b82',
        fontaccent: '#C2410C',
        navhover: '#9CA3AF',
    
        buttoncolor: '#C2410C',
        buttonhover: '#9A3412',
      }
    },
  },
  plugins: [],
}