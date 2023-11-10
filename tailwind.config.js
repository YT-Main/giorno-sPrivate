/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rich-red': '#800000',
        'dark-red': '#520101',
        'classic-black': '#000',
        'off-white': '#f5f5f5',
      },
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],
      },
      borderRadius: {
        'rounded-img': '1.5rem',
      },
    },
  },
  plugins: [],
}
