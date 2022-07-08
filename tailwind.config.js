module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms')],
  theme: {
    extend: {
      fontFamily: {
        edu: ['Edu QLD Beginner', 'cursive'],
      },
      colors: {
        // layout default dark colors
        dark: '#111827',
        'dark-light': '#182237',
        'dark-lighter': '#2a3849',

        // layout default light colors
        light: '#f9fafb',
        'main-light': '#fefefe',
        'black-200': '#333333',

        'orange-primary': '#FA6615',

        'blue-primary': '#49A5FA',
        'blue-secondary': 'rgb(23 111 246)',
        'blue-tertiary': '#0B3C85',
        'blue-baby': '#39d0ff',

        'green-primary': '#0DC35E',
        'green-primary2': '#0DC35F',
      },
      backgroundImage: {
        'textura-light': "url('/images/textura.svg')",
        'textura-dark': "url('/images/textura_dark.svg')",
        'espiral-light': "url('/images/espiral.svg')",
        'espiral-dark': "url('/images/espiral-dark.svg')",
        'confetes-light': "url('/images/confetes.svg')",
      },
      boxShadow: {
        missionActivated: '0 0 0 4px #3080ff',
      },
      width: {
        main: '831px',
      },
      animation: {
        'count-5': 'countdown 5s linear forwards',
        'count-10': 'countdown 10s linear forwards',
        'count-20': 'countdown 20s linear forwards',
        'count-30': 'countdown 30s linear forwards',
        'count-40': 'countdown 40s linear forwards',
        'count-50': 'countdown 50s linear forwards',
        'count-60': 'countdown 60s linear forwards',
        'count-120': 'countdown 120s linear forwards',
        button: 'pulseButton 1.25s infinite cubic-bezier(.66,0,0,1)',
        overlayShow: 'overlayShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        dropdownMenuShow: 'dropdownMenuShow 200ms cubic-bezier(0.2, 0, 0.13, 1.5);',
        fadeIn: 'fadeIn 200ms cubic-bezier(0.2, 0, 0.13, 1.5);',
      },
      keyframes: {
        countdown: {
          from: {
            strokeDashoffset: '0',
          },
          to: {
            strokeDashoffset: '-722px',
          },
        },
        overlayShow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        contentShow: {
          '0%': { opacity: '0', transform: 'translate(-50%, -48%) scale(.96)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        dropdownMenuShow: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseButton: {
          '0%': {
            boxShadow: '0 0 0 0 rgba(47, 129, 255, 0.7)',
          },
          '70%': {
            transform: ' scale(1)',
            boxShadow: '0 0 0 20px rgba(47, 129, 255, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(47, 129, 255, 0.0)',
          },
        },
      },
    },
  },
};
