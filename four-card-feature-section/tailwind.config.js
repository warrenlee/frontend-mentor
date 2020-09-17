module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
      fontFamily: {
          body: ['Poppins', 'sans-serif'],
          display: ['Poppins', 'sans-serif'],
      },
    extend: {
      colors: {
        red: 'hsl(0, 78%, 62%)',
        cyan: 'hsl(180, 62%, 55%)',
        orange: 'hsl(34, 97%, 64%)',
        blue: {
          darker: 'hsl(234, 12%, 34%)',
          gray: 'hsl(229, 6%, 66%)',
          default: 'hsl(212, 86%, 64%)'
        },
        gray: {
            lighter: 'hsl(0, 0%, 98%)'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
