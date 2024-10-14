/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        offwhite: "#F8F9F4",
        yakyellow: "#FFED9A",
        paleyellow: "#FFF9DF",
        outline: "#D5DBBC",
        red: "#B67878",
        palered: "#F0E8E8",
      },
    },
  },
  plugins: [],
};
