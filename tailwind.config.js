/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // bg colors
        'server-side-bg': '#1E1F22',
        'channel-selector-bg': '#2B2D31',
        'channel-bg': '#313338',
        'message-input-bg': '#383A40',
        'selected-channel-bg': '#404248',
        'user-info-bg': '#232428',
        'user-icon-bg': '#F8A531',
        'server-icon-bg': '#313338',
        'selected-server-icon-bg': '#596AEE',
        // text colors
        'gray-text': '#949BA3',
        'gray-icon': '#B5BAC1',
        'blue-text': '#1DA9F8',
        'muted-text': '#666870',
        // misc colors
        'misc-horizontal-separator': '#27282C',
        'misc-server-separator': '#35363C',
        'misc-logo': '#DBDEE1',
        'misc-selected-server-indicator': '#F2F3F5',
        'misc-green-icon': '#2CA45C',
        'misc-gray-icon': '#CACBCE',
      },
    },
  },
  plugins: [],
};
