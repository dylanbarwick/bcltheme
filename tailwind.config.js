module.exports = {
  content: ["**/*.twig"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'red': '#cc0000',
      'green': '#2d5e3e',
      'blue': '#2d325e',
      'blue-light': '#0073aa',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'yellow-light': '#e9fc89',
      'black': '#000000',
    },
    fontFamily: {
      sans: ['roboto', 'sans-serif'],
      serif: ['crimson', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
