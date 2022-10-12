import styled from "styled-components";

export const Title = styled("h1")(() => ({
  font: "500 3.5rem/2rem Josefin Sans,san-serif",
  color: "#fff",
  margin: "0 auto",
  padding: "0",
}));

export const SubTitle = styled("h2")(() => ({
  font: "200 1.5rem/2rem Josefin Sans,san-serif",
  color: "#fff",
  margin: "24px auto 0",
  padding: 0,
  fontSize: "1.75rem",
  width: "80%",
}));

export const Wrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexFlow: "column",
  width: "100%",
  height: "100%",
  margin: 0,
  padding: 0,
}));
