const pokemonOl = document.getElementById('pokemonlist')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecord = 651

const limit = 20
let offset = 0;


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="nome">${pokemon.name}</span>
                    <div class="datael">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class" type ${pokemon.type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">  
                    </div>
                </li>
                
                `
        ).join('')
        pokemonOl.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
    offset += limit;

    const qtdRegistroProximaPagina = offset + limit
    
    if(qtdRegistroProximaPagina >= maxRecord) {
        const newLimit = maxRecord - offset
        loadPokemonItens(offset,newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)

    }else{
        loadPokemonItens(offset,limit)
    }

})







