/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'orange':'#ff764d',
      'blue':'#0000ff',
      'lightyellow':'#fbffa7',
      'sabzkhiyar':'#b6ffc0',
      'sorati':'#d5b3ff',
      'yasi':'#b1c5ff',
      "gray":'#808080',
    },
    extend: {
      backgroundImage: {
        'hero-bg':"url('/image/Screenshot+2019-09-19+at+17.18.32.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),
  require("flowbite/plugin"),
],
}
