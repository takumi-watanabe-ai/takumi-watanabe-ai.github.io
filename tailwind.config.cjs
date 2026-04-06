import typographyPlugin from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Font Families
      fontFamily: {
        sans: ['Inter Variable', 'Inter', ...defaultTheme.fontFamily.sans],
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
    },
  },
  plugins: [typographyPlugin],
};
