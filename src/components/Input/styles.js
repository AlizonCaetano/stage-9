import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    height: 56px;
    width: 100%;
    margin-block: 4px;

    border-radius: 10px;
    background-color: ${({ theme })=> theme.COLORS.BACKGROUND_700};
    
    > svg {
        height: 24px;
        width: 24px;
        margin-left: 19px;
        color: ${({ theme })=> theme.COLORS.GRAY_300};
    }
    > input {
    
        font-size: 1.6rem;
        background: transparent;
        border: none;
        padding: 24px 19px 24px 19px;

        height: 56px;
        width: 100%;
        color: ${({ theme })=> theme.COLORS.WHITE};
        

        &:placeholder {
            color: ${({ theme })=> theme.COLORS.GRAY_100};
        }
    }
`