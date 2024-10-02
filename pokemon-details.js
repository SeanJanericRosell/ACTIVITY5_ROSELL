$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');

    fetch("pokedex.json")
        .then((rawData) => rawData.json())
        .then((pokedex) => {
            let pokemon = pokedex.find(p => p.id == pokemonId);

            if (pokemon) {
                let detailsHtml = `
                 <div class="pokemon-page-frame">
                    <div class="pokemon-page-image-container">
                        <img src="${pokemon.image.hires}" alt="${pokemon.name}" class="pokemon-page-image-small"> 
                    </div>
                    <div class="pokemon-page-details">
                        <h1>${pokemon.name}</h1>
                        <p class="pokemon-page-description">${pokemon.description}</p>
                         <p><span class="p-type">${pokemon.type.map(type => `<span class="type-design"><span class="${type}">${type}</span></span></li>`).join()}</p>
                    </div>
                    <div class="pokemon-page-stats">
                        <h3>Statistics</h3>
                        <ul>
                            <li>HP: ${pokemon.stats.hp}</li>
                            <li>Attack: ${pokemon.stats.attack}</li>
                            <li>Defense: ${pokemon.stats.defense}</li>
                            <li>Speed: ${pokemon.stats.speed}</li>
                        </ul>
                    </div>
                </div>
            `;
                $('#pokemon-details').html(detailsHtml);
            }
        });
});

function goBack() {
    window.history.back();
}
