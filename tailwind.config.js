/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      ternary: 'var(--color-bg)',
      info: 'var(--color-info)',
      warning: 'var(--color-warning)',
      danger: 'var(--color-danger)',
      card: 'var(--color-card-bg)',
      'text-primary': 'var(--color-text-primary)',
      'text-secondary': 'var(--color-text-secondary)',
    }
  },
  plugins: []
}
