import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  height: fill-available;
  height: -webkit-fill-available;
  scroll-behavior: smooth;
}

  body {
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    cursor: pointer;
    border: none;
    font-size: 20px;
  }
  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
