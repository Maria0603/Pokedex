export const fetchPokemonDetails = async (pokemonUrls) => {
  try {
    const detailedPokemonList = await Promise.all(
      pokemonUrls.map(async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon details");
        }
        return await response.json();
      })
    );
    return detailedPokemonList;
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    throw error;
  }
};
