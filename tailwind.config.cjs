module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'brown': {
          50: '#fdf5e6',
          100: '#ffdbac',
          200: '#f1c27d',
          300: '#e0ac69',
          400: '#c68642',
          500: '#8d5524'
        }
      },
      boxShadow: {
        '3': '-3px -3px 3px lightgrey'
      },
      animation: {
        'open-door': 'open 1s linear'
      },
      keyframes: {
        open: {
          '0%': {
            transform: 'translateX(-50%) skewY(0deg) translateX(50%)'
          },
          '100%': {
            transform: 'translateX(-50%) skewY(-40deg) translateX(50%)'
          }
        }
      }
    },
    
  },
  plugins: []
};