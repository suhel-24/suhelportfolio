/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'custom-blue': 'rgb(13,36,56)',
      'custom-button': 'rgb(99,102,241)',
      'custom-darkButton':'rgb(30,56,81)',
      'custom-lightButton':'rgb(247,248,252)',
      'deepSeaGreen': 'rgb(64,123,255)',
      'test':'rgb(64,123,255)',
      'card':'rgb(31 41 55 / var(--tw-bg-opacity))',
      'msg':'rgb(108,99,255)'
    }},
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
}

