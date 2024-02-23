/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screen:{
        xs:"350px",
        sm:"640px",
        md:"768px",
        lg:"1080px",
        xl:"1280px",
        ["2xl"]:"1530px"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        cursive:['cursive','sans'],
        fantasy:["fantasy","sans"]
      },

    },
  },
  plugins: [],
}
