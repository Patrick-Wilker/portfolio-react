import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        min-height: 100%;
    }

    body{
        background: #121214;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: 'Arial', sans-serif;
    }

    a{
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;