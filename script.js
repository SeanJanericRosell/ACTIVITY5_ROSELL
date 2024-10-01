$(document).ready(function () {
    // Load the Pokémon list on index.html
    $.getJSON('pokedex.json', function (data) {
        const pokemonList = $('#pokemon-list'); // Make sure this div exists in your HTML
        
        // Loop through each Pokémon in the JSON and generate HTML
        for (let i = 0; i < data.length; i++) {
            let pokemon = data[i];
            let cardHtml = `
                <div class="pokemon-card">
                    <a href="pokemon.html?id=${pokemon.id}">
                        <h3>${pokemon.name}</h3>
                        <img src="${pokemon.image}" alt="${pokemon.name}">
                    </a>
                </div>
            `;
            // Append the generated HTML to the pokemon list div
            pokemonList.append(cardHtml);
        }
    }).fail(function(jqxhr, textStatus, error) {
        console.error("Failed to load pokedex.json:", textStatus, error);
    });

    // Load Pokémon details on pokemon.html
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');

    if (pokemonId) {
        $.getJSON('pokedex.json', function (data) {
            let selectedPokemon = data.find(pokemon => pokemon.id == pokemonId);

            if (selectedPokemon) {
                let detailsHtml = `
                    <h2>${selectedPokemon.name}</h2>
                    <img src="${selectedPokemon.image}" alt="${selectedPokemon.name}">
                    <p>Type: ${selectedPokemon.type.join(', ')}</p>
                    <p>Description: ${selectedPokemon.description}</p>
                    <p><strong>Stats:</strong></p>
                    <ul>
                        <li>HP: ${selectedPokemon.stats.hp}</li>
                        <li>Attack: ${selectedPokemon.stats.attack}</li>
                        <li>Defense: ${selectedPokemon.stats.defense}</li>
                        <li>Speed: ${selectedPokemon.stats.speed}</li>
                    </ul>
                `;
                $('#pokemon-details').html(detailsHtml); // Insert the details into pokemon.html
            } else {
                $('#pokemon-details').html('<p>Pokémon not found</p>');
            }
        }).fail(function(jqxhr, textStatus, error) {
            console.error("Failed to load pokedex.json:",
