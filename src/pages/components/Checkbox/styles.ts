import { styled } from "@/styles";

export const Container = styled("label", {
  display: "block",
  position: "relative",

  height: "20px",
  borderRadius: "20px",

  paddingLeft: "20px",
  margin: "2px",

  cursor: "pointer",
  fontSize: "22px",
  "-webkit-user-select": "none",
  "-moz-user-select": "none",
  "-ms-user-select": "none",
  "user-select": "none",

  input: {
    position: "absolute",
    cursor: "pointer",
    opacity: 0,
    height: 0,
    width: 0,
  },

  /* Create a custom checkbox */
  ".checkmark": {
    position: "absolute",
    top: 0,
    left: 0,
    height: "20px",
    width: "20px",
    borderRadius: "20px",
    border: "2px solid $blue",
    transition: "all 0.2s ease-in-out",
  },

  /* When the checkbox is checked, add a blue background */
  "& input:checked ~ .checkmark": {
    backgroundColor: "$purple",
    borderColor: "$purple",
  },

  /* On mouse-over, add a grey background color */
  "&:hover input ~ .checkmark": {
    opacity: 0.8,
  },

  /* Create the checkmark/indicator (hidden when not checked) */
  ".checkmark:after": {
    content: "",
    position: "absolute",
    display: "none",
  },

  /* Show the checkmark when checked */
  "& input:checked ~ .checkmark:after": {
    display: "block",
  },

  /* Style the checkmark/indicator */
  "& .checkmark:after": {
    left: "5px",
    top: "2px",
    width: "4px",
    height: "8px",
    border: "solid white",
    borderWidth: "0 2px 2px 0",
    "-webkit-transform": "rotate(45deg)",
    "-ms-transform": "rotate(45deg)",
    transform: "rotate(45deg)",
  },
});
