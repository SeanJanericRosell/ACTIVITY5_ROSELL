$(document).ready(function () {

    $.getJSON('pokedex.json', function (data) {
        const pokemonList = $('#pokemon-list');
        data.forEach(pokemon => {
            const card = `<div class="pokemon-card">
                            <a href="pokemon.html?id=${pokemon.id}">${pokemon.name}</a>
                          </div>`;
            pokemonList.append(card);
        });
    });

    
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');

    if (pokemonId) {
        $.getJSON('pokedex.json', function (data) {
            const selectedPokemon = data.find(pokemon => pokemon.id == pokemonId);
            if (selectedPokemon) {
                const details = `<h2>${selectedPokemon.name}</h2>
                                <img src="${selectedPokemon.image}" alt="${selectedPokemon.name}">
                                <p>Type: ${selectedPokemon.type.join(', ')}</p>
                                <p>Description: ${selectedPokemon.description}</p>
                                <p>Stats:</p>
                                <ul>
                                    <li>HP: ${selectedPokemon.stats.hp}</li>
                                    <li>Attack: ${selectedPokemon.stats.attack}</li>
                                    <li>Defense: ${selectedPokemon.stats.defense}</li>
                                    <li>Speed: ${selectedPokemon.stats.speed}</li>
                                </ul>`;
                $('#pokemon-details').html(details);
            }
        });
    }
});
