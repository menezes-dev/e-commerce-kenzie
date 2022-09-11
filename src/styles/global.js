import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }


    :root{
        --color-primary: #2e245e;
        --color-secondary: #37268c;

        --grey-100: #292929;
        --grey-50: #242424;
        --grey-0: #f5f5f5;

        --font-family: 'Inter', sans-serif;
    }

`;

export default GlobalStyle;
