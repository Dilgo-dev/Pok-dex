import React from "react";
import PropTypes from "prop-types";

export default function ButtonNavBar({ index, setPokemonIndex, children }) {
    const handleClick = () => {
        setPokemonIndex(index);
    }

    return <button onClick={handleClick}>{children}</button>;
}


ButtonNavBar.propTypes = {
    index: PropTypes.number.isRequired,
    setPokemonIndex: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
};