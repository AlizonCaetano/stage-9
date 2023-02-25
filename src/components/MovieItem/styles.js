import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 56px;
    border-radius: 10px;
    padding: 16px;

    border: ${({ theme, isNew })=> isNew ?  `1px dashed ${theme.COLORS.GRAY_300}`: "none" };
    background-color: ${({ theme, isNew })=> isNew ? 'transparent' : theme.COLORS.BACKGROUND_700 };
    
    > input {
        width: 100%;
        height: 56px;
        padding: 12px;
        color: ${({theme})=> theme.COLORS.WHITE};
        background: transparent;
        border: none;
        outline: none;

        &:placeholder {
            color: ${({theme})=> theme.COLORS.GRAY_300}
        }
    }

    button {
        display: flex;
        border: none;
        background: none;
        color: ${({ theme })=> theme.COLORS.RED};   
        width: min-content;
    }
`