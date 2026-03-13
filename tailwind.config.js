/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        illumio: {
          // Primary brand colors
          primary: '#6366F1',
          'primary-dark': '#4F46E5',
          'primary-light': '#818CF8',
          orange: '#F97316',
          'orange-light': '#FB923C',
          coral: '#EC6547',
          // Light theme backgrounds
          bg: {
            white: '#FFFFFF',
            light: '#F9FAFB',
            card: '#FFFFFF',
            elevated: '#F3F4F6',
            hover: '#E5E7EB',
            sidebar: '#1E1B4B',
            'sidebar-hover': '#312E81',
          },
          // Text colors
          text: {
            primary: '#111827',
            secondary: '#6B7280',
            muted: '#9CA3AF',
            inverse: '#FFFFFF',
          },
          // Status colors
          success: '#10B981',
          'success-light': '#D1FAE5',
          warning: '#F59E0B',
          'warning-light': '#FEF3C7',
          danger: '#EF4444',
          'danger-light': '#FEE2E2',
          info: '#3B82F6',
          'info-light': '#DBEAFE',
          // Border colors
          border: {
            default: '#E5E7EB',
            light: '#F3F4F6',
            focus: '#6366F1',
          },
          // OT-specific colors
          ot: {
            purple: '#8B5CF6',
            teal: '#14B8A6',
            blue: '#0EA5E9',
            green: '#22C55E',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}
