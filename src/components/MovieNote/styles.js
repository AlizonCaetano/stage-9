import styled from 'styled-components'

export const Container = styled.div`
    transition: all .1s;
    background-color: ${({ theme })=> theme.COLORS.BACKGROUND_CARD_MOVIES};
    padding: 32px;
    margin-bottom: 16px;

    border-radius: 16px;
    cursor: pointer;

    &:hover{
        box-shadow: inset 0px 0px 11px -6px ${({ theme })=> theme.COLORS.RED};
    }

    > h3 {
        font-size: 2.4rem;
        margin-bottom: 15px;
        color: ${({ theme })=> theme.COLORS.WHITE};
    }

    > p {
        font-family: "Roboto", sans-serif;
        font-size: 1.6rem;
        color: ${({ theme })=> theme.COLORS.GRAY_100};

        display: -webkit-box; 
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical; 
        overflow: hidden; 
        text-overflow: ellipsis; 
        margin-bottom: 16px;
    }

    
`
