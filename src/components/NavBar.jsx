import PropTypes from 'prop-types';
import ButtonNavBar from './Button.navbar';

export default function NavBar({ setPokemonIndex, pokemonList }) {
    return (
        <nav>
            {pokemonList.map((pokemon, index) => (
                <ButtonNavBar
                    index={index}
                    key={index}
                    setPokemonIndex={setPokemonIndex}
                >
                    {pokemon.name}
                </ButtonNavBar>
            ))}
        </nav>
    );
}


NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string.isRequired
        })
    ).isRequired
};