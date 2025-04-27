import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";
import { getBackgroundColor } from "../../utils/colorRetreiver";

const PokemonCard = ({ pokemon }) => {
  const backgroundColor = getBackgroundColor(pokemon.types);

  return (
    <Link
      to={`/pokemon/${pokemon.name}`}
      state={{ pokemon }}
      className="pokemon-card-link"
      style={{ textDecoration: "none" }}
    >
      <div className="pokemon-card" style={{ backgroundColor }}>
        <div className="pokemon-card-content">
          <p className="pokemon-id"># {pokemon.id}</p>
          <h3 className="pokemon-name">{pokemon.name}</h3>
        </div>
        <img
          className="pokemon-image"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>
    </Link>
  );
};

export default PokemonCard;
