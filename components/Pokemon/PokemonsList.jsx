import React from 'react'
import Paginator from '../UI/Paginator'
import PokemonCard from './PokemonCard'

import { Grid } from '@nextui-org/react'

const PokemonsList = ({pokemons, pages}) => {
    return (
        <>
            <Grid.Container gap={3} justify='flex-start'>
                {pokemons.map((pokemon) => (
                    <Grid xs={12} sm={6} md={4} key={pokemon.name}>
                        <PokemonCard pokemon={pokemon} />
                    </Grid>
                ))}
            </Grid.Container>
            <Grid.Container xs={12} gap={2} justify='center'>
                <Grid xs={12} sm={6} md={4}>
                    <Paginator pages={pages} />
                </Grid>
            </Grid.Container>
        </>
    )
}

export default PokemonsList