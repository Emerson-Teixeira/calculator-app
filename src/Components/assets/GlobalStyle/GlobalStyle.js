import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Spartan', sans-serif;
    }
    body {
        background: ${({ theme }) => theme.background.main};
        font-size: 32px;
        margin: 0;
    }
    #app {
  height: 100%;
  min-height: 100vh;
}
    p {
        opacity: 0.6;
        line-height: 1.5;
    }
    img {
        max-width: 100%;
    }
`;
