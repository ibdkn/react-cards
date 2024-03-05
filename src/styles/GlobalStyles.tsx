import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle `
  *, 
  *::before, 
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`