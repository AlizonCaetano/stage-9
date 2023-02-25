import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
 
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
    "header"
    "content";
    `

export const Content = styled.div`
    padding: 0 12rem;

    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow-y: auto;

    > a > a {
        justify-content: flex-start;
    }

    h1 {
        color: ${({ theme })=> theme.COLORS.WHITE};
        font-weight: 400;
        margin-bottom: 4rem;
    }

    > div {
        display: flex;
        gap: 4rem;
        margin-bottom: 4rem;
    }
    
    h3 {
        color: ${({ theme })=> theme.COLORS.GRAY_100};
        margin-block: 4rem 2.4rem;
        font-weight: 400;
        font-size: 20px;
    }

    div.markups {
        padding: 16px;

        height: 88px;
        width: 100%;

        border-radius: 10px;
        background-color: ${({ theme })=> theme.COLORS.BACKGROUND_900};
    }

    button {
        width: 100%;
        margin: 0;
    }

    footer {
        display: flex;
        align-items: center;

        
        gap: 4rem;
        
        a{
            background-color: ${({ theme })=> theme.COLORS.BACKGROUND_900};
            border-radius: 10px;
        }
    }
`