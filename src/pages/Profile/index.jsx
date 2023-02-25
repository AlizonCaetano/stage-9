import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Link } from 'react-router-dom'
import { Container, Avatar, Form } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function Profile(){
    return(
        <Container>
            <header>
                <Link to='/home'>
                <ButtonText icon={ FiArrowLeft } title="Voltar"/>
                </Link>
            </header>
            
            <Form>
                <Avatar>
                    <img src="https://github.com/AlizonCaetano.png" alt="Profile Picture" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="document" />
                    </label>
                </Avatar>

                <Input icon={FiUser} placeholder="Nome" type="text"/>
                <Input icon={FiMail} placeholder="Email" type="email"/>
                <Input icon={FiLock} placeholder="Senha atual" type="password"/>
                <Input icon={FiLock} placeholder="Nova senha" type="password"/>

            <Button title="Salvar"/>
            </Form>

        </Container>
    )
}