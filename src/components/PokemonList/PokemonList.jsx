import React, { useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import useFetchPokemonList from "../../hooks/useFetchPokemonList";
import Button from "../Button/Button";
import "./PokemonList.css";

const pageSize = 12;

const PokemonList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { pokemonList, error, loading } = useFetchPokemonList(
    currentPage,
    pageSize
  );

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="pokemon-list">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
      <div className="button-container">
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1 || loading}
        >
          Previous Page
        </Button>
        <Button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={loading}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default PokemonList;
