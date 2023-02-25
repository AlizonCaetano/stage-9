import { Container } from './styles'
import { Tag } from '../../components/Tag'
import { Rating } from '../../components/Rating'

export function MovieNote({data, ...rest}){
    return(
        <Container {...rest}>
            <h3>{data.title}</h3>
            <Rating value={data.rating}/>
            <p data-text="280">{data.description}</p>

            <footer>
            { data.tags.map( tag => <Tag key={tag.id} title={tag.name} /> )}
            </footer>
        </Container>
    )
}