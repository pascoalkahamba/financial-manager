import { styled, Paper } from "@mui/material";
import { createGlobalStyle } from "styled-components";

export const Transition = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  color: theme.palette.text.secondary,
}));
