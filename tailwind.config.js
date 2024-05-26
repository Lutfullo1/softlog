/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        "2sm": "705px",
        "2md": "768px",
        lg: "1024px",
        "2lg": "1162px",
        "2xl": "1536px",
      },
      container: {
        padding: {
          sm: "1rem",
          lg: "4rem",
          "2xl": "5rem",
        },
        center: true,
        screens: {
          "2xl": "1456px",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        bgColor:
          "linear-gradient(90deg, rgba(13,0,36,1) 0%, rgba(69,46,126,1) 54%, rgba(69,25,151,1) 100%)",
        primary: "#2563EB",
      },
    },
  },

  plugins: [],
};
