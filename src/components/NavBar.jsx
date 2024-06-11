import PropTypes from 'prop-types';

export default function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
    const handlePrevious = () => {
      setPokemonIndex(oldIndex => oldIndex - 1);
    }
    const handleNext = () => {
      setPokemonIndex(oldIndex => oldIndex + 1);
    }

    return (
        <nav>
            {pokemonIndex > 0 ? (
                <button onClick={handlePrevious}>Précédent</button>
            ) : null}
            {pokemonIndex < pokemonList.length - 1 ? (
                <button onClick={handleNext}>Suivant</button>
            ) : null}
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