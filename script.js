$(document).ready(function () {
    $.getJSON('pokedex.json', function (data) {
        const pokemonContainer = $('#pokemon-container');

        data.forEach(pokemon => {
            const testCard = `
                <div class="pokemon-card">
                    <img src="${pokemon.image}" alt="${pokemon.name}">
                    <ul>
                        <li class="p-name"><a href="pokemon.html?id=${pokemon.id}">${pokemon.name}</a></li>
                        <li class="p-id">${pokemon.id}</li>
                        <li class="p-type">${pokemon.type.map(type => `<img src="images/${type.toLowerCase()}.png" alt="${type}">`).join('')}</li>
                    </ul>
                </div>
            `;
            pokemonContainer.append(testCard);
        });
    });
});
