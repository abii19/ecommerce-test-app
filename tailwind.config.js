/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "var(--primary-light)",
          DEFAULT: "var(--primary)"
        },
        dark: {
          light: "var(--dark-light)",
          DEFAULT: "var(--dark)"
        },
        black: "var(--dark)"
      },
      fontSize: {
        "heading1": [
          "var(--fs-heading1)",
          {
            lineHeight: "var(--lh-heading1)",
            fontWeight: 500
          }
        ],
        "heading3": [
          "var(--fs-heading3)",
          {
            lineHeight: "var(--lh-heading3)",
            fontWeight: 500
          }
        ],
        "heading4": [
          "var(--fs-heading4)",
          {
            lineHeight: "var(--lh-heading4)",
            fontWeight: 500
          }
        ],
        "base-lg": [
          "var(--fs-base-lg)",
          {
            lineHeight: "var(--lh-base-lg)",
            fontWeight: 500
          }
        ],
        "base": [
          "var(--fs-base)",
          {
            lineHeight: "var(--lh-base)",
            fontWeight: 500
          }
        ]
      },
      fontFamily: {
        poppins: "Poppins, sans-serif"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
