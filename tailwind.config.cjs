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

      // "Kinetic Paper" - Light Mode AI Specialist Palette (2026)
      colors: {
        // Light Theme: "Kinetic Paper" - Premium AI Research Lab Feel
        coconut: '#FDFDFC', // Main background - warm white
        fog: '#F4F4F5', // Secondary UI - card backgrounds
        ink: '#1A1A1E', // Deep text - headlines and body
        steel: '#71717A', // Technical accent - metadata, RAG sources

        // Primary Brand: "Agentic" Orange
        ember: {
          DEFAULT: '#FF5F1F', // Neon Persimmon - action color
          hover: '#E5541C', // Slightly deeper orange
          glow: 'rgba(255, 95, 31, 0.02)', // 2% glow for hover states
        },

        // Complementary Accent
        teal: {
          DEFAULT: '#0D9488', // Deep Teal - success/verified states
          hover: '#0F766E', // Deeper teal
        },

        // Dark Theme Colors (existing - can be updated to Obsidian Ember later)
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
        // Light Theme: Kinetic Paper - Ember glow matching dark mode intensity
        'ember-glow': '0 0 0 1px rgba(255, 95, 31, 0.08), 0 2px 4px rgba(255, 95, 31, 0.04)',
        'ember-glow-md': '0 0 20px rgba(255, 95, 31, 0.4)', // Matches dark mode glow intensity
        'bento': '0 1px 2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.02)', // Subtle card shadow
        'bento-hover': '0 4px 8px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 95, 31, 0.08)', // Hover with ember hint

        // Dark Theme: Sky-400 glow
        'glow-sm': '0 0 10px rgba(56, 189, 248, 0.3)',
        'glow-md': '0 0 20px rgba(56, 189, 248, 0.4)', // Blue glow for dark mode
        'glow-accent': '0 0 15px rgba(45, 212, 191, 0.3)',
        'lift': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
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
