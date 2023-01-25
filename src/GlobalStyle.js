import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  height: fill-available;
  height: -webkit-fill-available;
}
.ReactModal__Body--open {
    background: rgba(0,0,0,0.8);
  }
  body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-overflow-scrolling: touch;
  min-height: 100vh;
  min-height: fill-available;
  min-height: -webkit-fill-available;
  letter-spacing: 1px;
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    letter-spacing: 1px;
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
`;

export default GlobalStyle;
