/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors:{
      'fg.default': '#22292F',
      'fg.muted': '#57606A',
      'fg.subtle': '#6E7781',

      'fg.success': '#197F37',
      'fg.danger': 'rgb(var(--color-fg-danger) / <alpha-value>)',
      'fg.accent': 'rgb(var(--color-fg-accent) / <alpha-value>)',

      'bg.default': 'rgb(var(--color-bg-default) / <alpha-value>)',
      'bg.overlay': 'rgb(var(--color-bg-overlay) / <alpha-value>)',
      'bg.inset': 'rgb(var(--color-bg-inset) / <alpha-value>)',
      'bg.subtle': 'rgb(var(--color-bg-subtle) / <alpha-value>)',

      'border.default': 'rgb(var(--color-border-default) / <alpha-value>)',
      'border.muted': 'rgb(var(--color-border-muted) / <alpha-value>)',

      transparent: 'rgba(0,0,0,0)',
      black: '#000000',
      white: '#ffffff',
    }
  },
  plugins: [],
}

