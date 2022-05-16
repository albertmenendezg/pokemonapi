import { Card } from "@nextui-org/react";
import { Text } from "@nextui-org/react";

const PokemonCard = ({pokemon}) => {
    return (
        <Card hoverable clickable css={{bc:'grey'}}>
            <Card.Header>
                <Text variant="h1">{pokemon.name}</Text>
            </Card.Header>
            <Card.Body css={{p:1}}>
                <Card.Image src={pokemon.img} width="100%" height={140}/>
            </Card.Body>
            <Card.Footer>
                <Text variant="h2">Id: #{pokemon.id}</Text>
                <Text variant="h2">Name: #{pokemon.name}</Text>
            </Card.Footer>
        </Card>
    )
}

export default PokemonCard