/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import { autumn, dracula } from "daisyui/src/theming/themes";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [daisyui],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "4rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "10rem",
      },
    },
    fontFamily: { sans: "Inter" },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        autumn: {
          ...autumn,
          primary: "#D4A373",
          secondary: "#1C8080",
        },
      },
      {
        dracula: {
          ...dracula,
          primary: "#38BDF8",
        },
      },
    ],
    darkTheme: "dracula", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
