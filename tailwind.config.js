module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", // Include if you reference Tailwind classes in the HTML
  ],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Inter"', 'sans-serif'],
        },
        colors: {
          primary: "#4facfe",
          secondary: "#00f2fe",
        },
      },
    },
  },
  plugins: [],
};
