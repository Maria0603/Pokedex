const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemonUrlList = async (currentPage, pageSize) => {
  const offset = (currentPage - 1) * pageSize;
  const url = `${baseUrl}?offset=${offset}&limit=${pageSize}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon list");
    }
    const data = await response.json();
    return data.results.map((pokemon) => pokemon.url);
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    throw error;
  }
};