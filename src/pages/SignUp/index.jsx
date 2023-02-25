import { Link } from 'react-router-dom'

import { Container, Form, Background } from './styles'

import { FiLock, FiMail, FiArrowLeft, FiUser } from 'react-icons/fi'

import { Brand } from '../../components/Brand'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'


export function SignUp(){
    return(
        <Container>
            <Form>
                <Brand/>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
            
                <Input icon={FiUser} type="text" placeholder="Nome"/>
                <Input icon={FiMail} type="email" placeholder="Email"/>
                <Input icon={FiLock} type="password" placeholder="Senha"/>


                <Link to="/">
                <Button type="button" title="Cadastrar" />
                </Link>

                <Link to="/">
                <ButtonText icon={FiArrowLeft} title="Voltar para o login"/>
                </Link>
            </Form>
            <Background/>
        </Container>
    )
}