import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",

      background: "#1A1A1A",

      purple: "#8284FA",
      purpleDark: "#5E60CE",

      blue: "#4EA8DE",
      blueDark: "#1E6F9F",

      gray700: "#0D0D0D",
      gray600: "#1A1A1A",
      gray500: "#262626",
      gray400: "#333333",

      gray300: "#808080",
      gray200: "#D9D9D9",
      gray100: "#F2F2F2",
      danger: "#E25858",
    },

    fontSizes: {
      xm: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
});
