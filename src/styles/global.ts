import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FFFAF3;
    color: #3A3A3A;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }
`;
