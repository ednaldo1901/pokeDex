

const pokeApi = {};

function convertDetailPokemon(pokeDetail) {
   const pokemon = new Pokemon();
   pokemon.url = pokeDetail.url
   pokemon.number = pokeDetail.id;
   pokemon.name = pokeDetail.name;

   const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
   const [type] = types;

   pokemon.types = types;
   pokemon.type = type;

   pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

   return pokemon;
}

pokeApi.getPokemonDetail = async (pokemon) => {
   return fetch(pokemon.url)
       .then((response) => response.json())
       .then(convertDetailPokemon);
};

pokeApi.getPokemons = async (offset = 0, limit = 5) => {
   const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
   return fetch(url)
       .then((response) => response.json())
       .then((jsonBody) => jsonBody.results)
       .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
       .then((detailRequests) => Promise.all(detailRequests))
       .then((pokemonDetails) => pokemonDetails);
};

// Exemplo de uso:





