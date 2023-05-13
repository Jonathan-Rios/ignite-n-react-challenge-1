import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",

  marginTop: "50px",

  width: "736px",
  height: "200px",

  img: {
    height: "42px",
    margin: "auto",
  },

  "& > div": {
    display: "flex",
    margin: "auto",
    gap: "0.5rem",
    width: "100%",

    input: {
      all: "unset",

      width: "100%",

      padding: "1rem",

      borderRadius: "8px",

      backgroundColor: "$gray500",
      border: "1px solid $gray700",
      color: "$gray300",
    },

    button: {
      all: "unset",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      padding: "1rem",
      borderRadius: "8px",

      color: "$white",
      backgroundColor: "$blueDark",

      fontSize: "$sm",
      fontWeight: "bold",

      gap: "0.5rem",

      cursor: "pointer",
      transition: "background-color 0.2s ease-in-out",

      "&:hover": {
        backgroundColor: "$blue",
      },

      svg: {
        fontSize: "$md",
      },
    },
  },
});
