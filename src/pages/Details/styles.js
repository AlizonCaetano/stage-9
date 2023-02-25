import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 11.6rem auto;

    grid-template-areas: 
    "header"
    "content"
    ;

    main {
        display: flex;
        padding: 0 12rem;
        justify-content: flex-start;
        flex-direction: column;
        justify-content: flex-start;

        a {
            display: flex;
            justify-content: flex-start;
        }
    }

`

export const Content = styled.div`
    grid-area: content;
    width: 100%;

    p {
        text-align: justify;
        color: ${({ theme })=> theme.COLORS.WHITE}
    }

    h2 {
        display: flex;
        font-size: 36px;

        align-items: center;
        font-weight: 400;
        gap: 16px;

        div {
            width: 12rem;
        }
    }

    span {
        background-color: ${({ theme })=> theme.COLORS.BACKGROUND_CARD_MOVIES};
    }
    

    header {
        margin-bottom: 4rem;

        > div {
            margin: 40px auto;
            display: flex;
            align-items: center;
        }
    }
`

export const Author = styled.div`
    font-family: sans-serif;

    display: flex;
    align-items: center;
   
    gap: 5px;
    

    img {
        border-radius: 50%;
        height: 20px;
        margin-right: 8px;
        border: 2px solid ${({ theme })=> theme.COLORS.RED};
    }

    span { 
        background: none;
    }

    svg {
        color: ${({ theme })=> theme.COLORS.RED};
        font-size: 20px;
    }


`