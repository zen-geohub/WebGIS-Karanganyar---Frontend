/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))'
      },
      gridRow: {
        'span-12': 'span 12 / span 12',
        'span-13': 'span 13 / span 13'
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14'
      },
      gridColumnStart: {
        '14': '14',
        '15': '15',
      },
      gridColumnEnd: {
        '14': '14',
        '15': '15',
        '16': '16',
      },
    },
  },
  plugins: [],
}

