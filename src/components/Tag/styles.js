import styled from 'styled-components'

export const Container = styled.span`
    color: ${({ theme })=> theme.COLORS.GRAY_100};
    background-color: ${({ theme })=> theme.COLORS.BACKGROUND_800};
    font-size: 1.2rem;

    border-radius: 8px;
    margin-right: 8px;

    padding: 5px 12px;
`