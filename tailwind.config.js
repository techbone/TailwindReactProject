module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        gridBox: "33rem",
      },
      colors: {
        blackBackground: "#222222",
        whiteBackground: "#e6e6e6",
        green: "#f6fde4",
        whitishBrown: "#f5f5f5",
      },
      backgroundImage: {
        "content-background": "url('/src/images/1498_detail.jpg_master.jpg')",
        "about-image-one": "url('/src/images/blue2.jpeg')",
        "about-image-two": "url('/src/images/cabinet2.jpeg')",
        "about-image-three": "url('/src/images/sanji2.jpeg')",
        "kitchen-image": "url('/src/images/pizzaoption2.jpeg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
