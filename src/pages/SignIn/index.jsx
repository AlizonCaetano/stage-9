import { Container, Form, Background } from './styles'
import { Link } from 'react-router-dom'

import { FiLock, FiMail } from 'react-icons/fi'

import { Brand } from '../../components/Brand'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'


export function SignIn(){
    return(
        <Container>
            <Form>
                <Brand/>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
            
                <Input icon={FiMail} type="email" placeholder="E-mail"/>
                <Input icon={FiLock} type="password" placeholder="Senha"/>

                <Link to="/home">
                <Button title="Entrar" />
                </Link>

                <Link to="/register">
                <ButtonText title="Criar conta"/>
                </Link>
            </Form>
            <Background/>
        </Container>
    )
}