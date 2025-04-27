import React from "react";
import { useLocation } from "react-router-dom";
import "./PokemonDetails.css";
import { getBackgroundColor } from "../../utils/colorRetreiver";

const PokemonDetails = () => {
  const location = useLocation();
  const { pokemon } = location.state || {};

  if (!pokemon) {
    return <p>No Pokémon data available. Please go back to the list.</p>;
  }

  const backgroundColor = getBackgroundColor(pokemon.types);
  return (
    <div className="pokemon-details-card" style={{ backgroundColor }}>
      <div className="pokemon-details-container">
        <div className="pokemon-image-column">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>

        <div className="pokemon-info-column">
          <h1>{pokemon.name}</h1>
          <p># {pokemon.id}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
        </div>

        <div className="pokemon-abilities-column">
          <h2>Abilities</h2>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
