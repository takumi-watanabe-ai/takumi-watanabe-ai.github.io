import typographyPlugin from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      // Font Families
      fontFamily: {
        sans: ['Inter Variable', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', ...defaultTheme.fontFamily.mono],
      },

      // "Cognitive Clarity" - AI Specialist Color Palette (2026)
      colors: {
        // Light Theme Colors
        alabaster: '#F9FAFB', // Primary background - soft, premium white
        platinum: '#E5E7EB', // Borders and dividers
        charcoal: '#111827', // Primary text - ink black

        // Brand Colors
        indigo: {
          DEFAULT: '#4F46E5', // Indigo Insight - primary brand
          hover: '#4338CA', // Deeper indigo
        },
        cyan: {
          DEFAULT: '#0891B2', // System Cyan - technical/data markers
          hover: '#0E7490', // Deeper cyan
        },

        // Dark Theme Colors (keep existing)
        primary: {
          DEFAULT: '#38bdf8', // sky-400
          hover: '#0ea5e9', // sky-500
        },
        accent: {
          DEFAULT: '#2dd4bf', // teal-400
          hover: '#14b8a6', // teal-500
        },
      },

      // Typography Scale
      fontSize: {
        sm: ['14px', { lineHeight: '1.5' }],
        base: ['16px', { lineHeight: '1.6' }],
        lg: ['18px', { lineHeight: '1.6' }],
        xl: ['20px', { lineHeight: '1.3' }],
        '2xl': ['24px', { lineHeight: '1.3' }],
        '3xl': ['28px', { lineHeight: '1.2' }],
        '4xl': ['36px', { lineHeight: '1.1' }],
        '6xl': ['56px', { lineHeight: '1.1' }],
      },

      // Max Content Width
      maxWidth: {
        '7xl': '1280px',
      },

      // Glassmorphism and AI-themed effects
      backdropBlur: {
        xs: '2px',
        glass: '8px', // Modern glassy effect
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(56, 189, 248, 0.3)',
        'glow-md': '0 0 20px rgba(56, 189, 248, 0.4)',
        'glow-accent': '0 0 15px rgba(45, 212, 191, 0.3)',
        'lift': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', // Card lift effect
        'lift-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      backgroundImage: {
        'dot-matrix': 'radial-gradient(circle, #E5E7EB 1px, transparent 1px)',
        'dot-matrix-dark': 'radial-gradient(circle, #1e293b 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-pattern': '20px 20px',
      },
    },
  },
  plugins: [typographyPlugin],
};
