import styled from 'styled-components'

export const Container = styled.div`
    grid-area: header;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 12rem;

    height: 11.6rem;
    width: 100%;

    gap: 64px;

    border-bottom: 1px solid ${({ theme })=> theme.COLORS.BACKGROUND_700};

    > h1 {
        font-size: 1rem;
    }

    @media(max-width: 768px){

        h1 {
            display: none;
        }


    }

`

export const Profile = styled.div`
    display: flex;
    flex-direction: row;

    min-width: 19rem;

    > div {
        display: flex;
        flex-direction: column;
    
        justify-content: center;

        strong {
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 18px;

            color: ${({ theme })=> theme.COLORS.WHITE};
        }

        a {
            font-size: 1.4rem;
            line-height: 18px;
            font-weight: 400;

            text-align: end;

            color: ${({ theme })=> theme.COLORS.GRAY_100};
        }
    }

    > a {

        img {
            width: 6.6rem;
            height: 6.6rem;
            border-radius: 50%;
            
            margin-left: 8px;
            
            border: 2px solid ${({ theme })=> theme.COLORS.RED};
        } 
    }

`