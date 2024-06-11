const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default function PokemonCard() {
    const { name, imgSrc } = pokemonList[0];

    return (
        <figure>
            { imgSrc ? <img src={imgSrc} alt={`${name} pokemon image`}/> : <p>???</p> }
            <figcaption>{name}</figcaption>
        </figure>
    );
}
