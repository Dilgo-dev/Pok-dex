import { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard'
import pokemonList from './utils/pokemonList';
import NavBar from './components/NavBar';
import './App.css'

export default function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);

    useEffect(() => {
        alert("Hello pokemon trainer :)");
    }, []);

    return (
        <div>
            <PokemonCard pokemon={pokemonList[pokemonIndex]} />
            <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList}/>
        </div>
    );
}
