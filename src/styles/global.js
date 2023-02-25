import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0%;
        padding: 0;
        box-sizing: border-box;
    }
    
    :root {
        font-size: 62.5%;
    }
    
    body {
        font-size: 1.6rem;
        background-color: ${({ theme })=> theme.COLORS.BACKGROUND_800};
        color: ${({ theme })=> theme.COLORS.WHITE};
        
        height: 100vh;
        width: 100%;

        
    }
    
    ::-webkit-scrollbar {
        width: 10px;
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        height: 20px;

        background-color: ${({theme})=> theme.COLORS.RED};
        border-radius: 5px;

        transition: all .2s;
    }

    ::-webkit-scrollbar-thumb:hover{
        background-color: ${({theme})=> theme.COLORS.GRAY_300};

    }

    body, input, button, textarea {

        font-family: 'Roboto Slab', serif;
     }

     a {
        text-decoration: none;
    }

     button, a{
        cursor: pointer;
        transition: filter .2s;
     }

     button:hover, a:hover{
        filter: brightness(1.2);
     }

`