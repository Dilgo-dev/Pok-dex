import { useState } from 'react';
import PokemonCard from './components/PokemonCard'
import pokemonList from './utils/pokemonList';
import './App.css'
import NavBar from './components/NavBar';

export default function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);

    return (
        <div>
            <PokemonCard pokemon={pokemonList[pokemonIndex]} />
            <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList}/>
        </div>
    );
}
