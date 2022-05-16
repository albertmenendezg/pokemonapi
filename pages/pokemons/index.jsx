import MainLayout from '../../components/Layouts/MainLayout'
import PokemonsList from '../../components/Pokemon/PokemonsList'
import { pokeApi } from '../../api/pokeApi'

const itemsPerPage = 20

const pokemons = ({pokemons, count}) => {
  const pages = Math.ceil(count / itemsPerPage)
  return (
    <MainLayout title="Pokemons">
      <img src='/assets/pokemon.png' alt="Pokemons" className='imageHeader' title='Pokemons'/>
      <PokemonsList pokemons={pokemons} pages={pages} />
    </MainLayout>
  )
}

export async function getStaticProps() {
  const resp = await pokeApi.get('/pokemon')
  const pokemons = resp.data.results
  const count = resp.data.count

  pokemons.map(async (pokemon) => {
    pokemon.id = pokemon.url.split('/')[6]
    pokemon.img =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  })

  return {
    props: {
      pokemons,
      count
    }
  }
}

export default pokemons