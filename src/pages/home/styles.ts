import { styled } from "@/styles";
import { Checkbox } from "../components/Checkbox";

export const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const ToDoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  margin: "auto",

  width: "736px",

  gap: "1.5rem",

  "& > div": {
    display: "flex",

    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",
  },

  "& > section": {
    display: "flex",

    flexDirection: "column",

    gap: "1rem",
  },
});

export const ToDoItem = styled("section", {
  variants: {
    status: {
      completed: {
        p: {
          textDecoration: "line-through",
          color: "$gray300",
        },
      },
      "": {},
    },
  },

  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",

  gap: "1rem",

  border: "1px solid $gray400",
  backgroundColor: "$gray500",
  borderRadius: "8px",

  padding: "1rem",

  "& > label": {
    marginRight: "auto",
  },

  input: {
    all: "unset",
    borderRadius: "8px",
    backgroundColor: "red",
  },

  button: {
    all: "unset",
    cursor: "pointer",
    marginLeft: "auto",

    svg: {
      fontSize: "1.25rem",
    },
  },

  p: {
    color: "$gray100",
    width: "100%",
    margin: "auto",
    wordBreak: "break-all",
  },
});

export const EmptyList = styled("section", {
  display: "flex",
  flexDirection: "column",

  color: "$gray100",

  border: "none",
  borderRadius: "8px",
  borderTop: "1px solid $gray400",

  alignItems: "center",
  justifyContent: "center",

  minHeight: "244px",

  lineHeight: "22.4px",

  img: {
    marginBottom: "1rem",
    aspectRatio: "1 / 1",
    width: "3.5rem",
  },
});

export const Counters = styled("div", {
  variants: {
    type: {
      created: { color: "$blue" },
      completed: { color: "$purple" },
    },
  },

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "$sm",
  fontWeight: "bold",

  gap: "0.5rem",

  span: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: "$gray400",
    color: "$white",
    borderRadius: "999px",
    fontSize: "$xm",
    fontWeight: "bold",

    padding: "2px 8px",
    height: "19px",
  },
});
