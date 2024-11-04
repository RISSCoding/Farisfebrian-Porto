module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#D8F247',
        'custom-gray': '#B1B1B1',
        'custom-dark': '#030C18',
      },
      backgroundImage: {
        'custom-bg': "url('/assets/grain.jpg')",
      },      
      spacing: {
        'custom-width': '1920px',
        'custom-height': '3354px',
      },
      rotate: {
        'custom-90': '90deg',
      },
      borderWidth: {
        '3': '3px',
      },
      borderRadius: {
        'custom-radius': '50px',
      },
      screens: {
        'sm': '640px',  // Small screens
        'md': '768px',  // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1440px', // Extra large screens
        '2xl': '1536px', // Extra extra large screens
      },
      height: {
        'screen': '100vh', // Optional: for full height
      },
      width: {
        'full': '100vw', // Optional: for full width
      },
    },
  },
  plugins: [],
}
