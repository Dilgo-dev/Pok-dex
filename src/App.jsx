import { useState } from 'react';
import PokemonCard from './components/PokemonCard'
import pokemonList from './utils/pokemonList';
import './App.css'

export default function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);

    const handlePrevious = () => {
      setPokemonIndex(oldIndex => oldIndex - 1);
    }
    const handleNext = () => {
      setPokemonIndex(oldIndex => oldIndex + 1);
    }
    return (
        <div>
            <PokemonCard pokemon={pokemonList[pokemonIndex]} />
            <section>
              { pokemonIndex > 0 ? <button onClick={handlePrevious}>Précédent</button> : null }
              { pokemonIndex < pokemonList.length - 1 ? <button onClick={handleNext}>Suivant</button> : null }
            </section>
        </div>
    );
}
