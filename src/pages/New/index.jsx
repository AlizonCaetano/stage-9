import { Link } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

import { Container, Content } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { MovieItem } from '../../components/MovieItem'

export function New(){
    return(   
        <Container>
            <Header />
            <Content>
                <Link to="/home">
                <ButtonText title="Voltar" icon={FiArrowLeft} />
                </Link>
                <h1>Novo filme</h1>
                <div>
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </div>

                <TextArea placeholder="Observações"/>

                <h3>Marcadores</h3>
                <div className="markups" >
                    <MovieItem value="React"/>
                    <MovieItem isNew placeholder="Novo marcador"/>

                </div>

                <footer>
                    <ButtonText title="Excluir item"/>
                    <Button title="Salvar alterações"/>
                </footer>
            </Content>
        </Container>
    )
}