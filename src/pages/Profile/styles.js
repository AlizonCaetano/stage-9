import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    flex-direction: column;

    header {
        display: flex;        
        align-items: center;
    
        width: 100vw;
        height: 14rem;
        
        padding: 0 12rem;
        
        background-color: ${({ theme })=> theme.COLORS.BACKGROUND_CARD_MOVIES};
        
    }
`

export const Avatar = styled.div`
        display: flex;
        flex-direction: column;
        position: relative;

        img {
            height: 19rem;
            width: 19rem;
            border-radius: 50%;
            margin: 0 auto 46px;
        }

        label {
            position: absolute;
            cursor: pointer;
            bottom: 5rem;
            right: 5rem;

            padding: 16px 18px;
            border-radius: 50%;
            background-color: ${({ theme })=> theme.COLORS.RED};

            input {
                display: none;
            }
        }

`

export const Form = styled.form`
    height: 100%;
    width: 34rem;
    
    margin: -80px 0;


    > div {
        margin-bottom: 8px;
    }

    > div:nth-child(3){
        margin-bottom: 2.4rem;
    }

    button { 
        width: 100%;
    }
`