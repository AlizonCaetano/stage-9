import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;

    margin: 3.2rem 0 4.8rem ;

    color: ${({ theme })=> theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme })=> theme.COLORS.RED};

    padding: 15px 32px;

    border-radius: 8px;
    border: none;

    svg {
        margin-right: 8px;
        font-weight: 400;
    }

    &:disabled {
        opacity: 0.5;
    }
`