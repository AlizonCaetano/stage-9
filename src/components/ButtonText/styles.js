import styled from 'styled-components'

export const Container = styled.a`
    border: none;
    background: none;

    display: flex;
    align-items:center;
    justify-content: center;


    width: 100%;
    height: 5.6rem;

    margin-block: 2.4rem;

    color: ${({ theme })=> theme.COLORS.RED};

    > svg {
        margin-right: 16px;
    }
`