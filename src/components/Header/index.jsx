import { Link } from 'react-router-dom'

import { Container, Profile } from './styles'
import { Brand } from '../../components/Brand'
import { Input } from '../../components/Input'

export function Header(){
    return(
        <Container>
            <Brand/>
            <Input placeholder="Pesquisar pelo título"/>
            <Profile>
                <div>
                    <strong>Alison Caetano</strong>
                    <Link to="/">
                    <a>sair</a>
                    </Link>
                </div>

                <Link to="/profile">
                    <img src="https://github.com/AlizonCaetano.png" alt="Profile Picture" />
                </Link>
            </Profile>
        </Container>
    )
}