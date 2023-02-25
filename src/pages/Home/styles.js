import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;

    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        padding: 4.7rem 12rem 0;
        overflow-y: hidden;
    }
`

export const Content = styled.div`
    height: 83vh;
    overflow-y: auto;

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

    div {
        margin-right: 10px;
    }

    > div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        margin-bottom: 40px;
        
        h2 {
            font-weight: 400;
            color: ${({ theme })=> theme.COLORS.WHITE};
            font-size: 3.2rem;
        }
    }

`
