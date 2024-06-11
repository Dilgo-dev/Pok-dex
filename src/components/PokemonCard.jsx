import PropTypes from "prop-types";

PokemonCard.propTypes = {
    name: PropTypes.string,
    src: PropTypes.string
}

export default function PokemonCard({ name, src }) {
    return (
        <figure>
            { src ? <img src={src} alt={`${name} pokemon image`}/> : <p>???</p> }
            <figcaption>{name}</figcaption>
        </figure>
    );
}
