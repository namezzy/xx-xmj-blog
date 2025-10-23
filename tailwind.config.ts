import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#000000',
            a: {
              color: '#0000EE',
              textDecoration: 'underline',
              '&:visited': {
                color: '#551A8B',
              },
            },
            h1: {
              fontFamily: 'Georgia, "Times New Roman", Times, serif',
              fontWeight: 'bold',
            },
            h2: {
              fontFamily: 'Georgia, "Times New Roman", Times, serif',
              fontWeight: 'bold',
            },
            h3: {
              fontFamily: 'Georgia, "Times New Roman", Times, serif',
              fontWeight: 'bold',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
