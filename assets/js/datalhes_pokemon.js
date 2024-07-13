const detalhePokemon = document.getElementById('detalhePokemon')

const limit = 1
let offset = 0;


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const novoHtml = pokemons.map((pokemon) => `
               <section class="content fundo ${pokemon.type}" id="detalhePokemon">
        <div class="Detalhes" >
            <a href="index.html"><h4 class="titlo"> <span class="simbolo">&lt;</span> pokedex</h4></a>
            <span class="nome" >${pokemon.name}</span>
            <ol class="detalhe">
                <li class="detalhe">
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                    <span class="tipo ${pokemon.type}">${pokemon.type}</span>
                </li>
            </ol>
        </div>
    </section>
                
                `
        ).join('')
        detalhePokemon.innerHTML += novoHtml
    })
}

loadPokemonItens(offset, limit);
