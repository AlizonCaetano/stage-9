import styled from 'styled-components'
import bg from '../../assets/bg.png'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 630px auto;

    height: 100vh;
    width: 100%;

    button {
        width: 100%;
    }
` 

export const Form = styled.form`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 13rem;

    h1 {
        font-size: 5.4rem;
        line-height: 6.3rem;
    }
    
    p {
        color: ${({ theme })=> theme.COLORS.GRAY_100};
    }
    
    h2 {
        font-size: 2.4rem;
        margin-block: 4.8rem;
    }
`

export const Background = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;

    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: content;
`