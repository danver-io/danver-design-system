/** @type {import('tailwindcss').Config} */
module.exports = {
  presets:[
      require('./config/preset/tailwind-preset.js')
  ],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme:{
    extend:{
      colors:{

      }
    }
  },
  plugins: [],
}

