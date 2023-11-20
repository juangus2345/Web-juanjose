import { useState } from 'react'
import { FilterBar, PokemonCard, Loader } from '../../Components'
// import { PokemonContext } from ''PokemonContext
import './HomePage.css'

export function HomePage () {
  // const { pokemonData, isLoading } = useContext()

  const isLoading = false
  const [filteredPokemonData, setFilteredPokemonData] = useState([])

  // useEffect(() => {
  //   setFilteredPokemonData(pokemonData)
  // }, [])

  return (
    <div>
      <FilterBar setFilteredPokemonData={setFilteredPokemonData} />
      <div className='pokemon-list'>
        {isLoading
          ? (
            <Loader />
            )
          : (
              filteredPokemonData.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))
            )}
      </div>
    </div>
  )
}
