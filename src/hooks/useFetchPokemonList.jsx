import { useState, useEffect } from "react";
import { fetchPokemonDetails } from "../utils/pokemonDetailedListRetreiver";
import { fetchPokemonUrlList } from "../utils/pokemonListUrlRetreiver";

const useFetchPokemonList = (currentPage, pageSize) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemonPage = async () => {
      setError(null);
      setLoading(true);

      try {
        const pokemonUrls = await fetchPokemonUrlList(currentPage, pageSize);
        const detailedPokemonList = await fetchPokemonDetails(pokemonUrls);
        setPokemonList(detailedPokemonList);
      } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonPage();
  }, [currentPage, pageSize]);

  return { pokemonList, error, loading };
};

export default useFetchPokemonList;
