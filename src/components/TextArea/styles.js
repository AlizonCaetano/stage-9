import styled from 'styled-components'

export const Container = styled.textarea`
    display: flex;

    background-color: ${({ theme })=> theme.COLORS.BACKGROUND_700};
    
    border-radius: 10px;
    padding: 1.9rem;

    width: 100%;
    height: 27.4rem;

    font-size: 1.6rem;
    color: ${({ theme })=> theme.COLORS.WHITE};

    &:placeholder{
        color: ${({ theme })=> theme.COLORS.GRAY_100};

    }

    border: none;
    resize: none;
`