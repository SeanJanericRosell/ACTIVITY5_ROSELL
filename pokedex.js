$(document).ready(function() {
    fetch("pokedex.json")
    .then((rawData) => rawData.json())
    .then((pokedex) => {
        
        pokedex.forEach(pokemon => {
            let id = "#" + (10000 + pokemon["id"]).toString().substring(1);
            let rid = pokemon["id"];
            let name = pokemon["name"];
            let imageUrl = pokemon["image"]["hires"];
            let types = pokemon["type"];
            let typeHTML = types.map(type => 
                `<span class="${type}">${type}</span>`
            ).join('');

            $(".pokemon-container").append(
                `<a id="${rid}" onclick="SetID(${rid})" style="text-decoration:none;">
                    <div class="pokemon-card">
                    <img src="${imageUrl}" alt="${name}" class="pokemon-image"> 
                        <ul>
                            <li class="p-name">${name}</li>
                            <li class="p-id">${id}</li>
                            <li class="p-type">${typeHTML}</li>
                        </ul>
                    </div>
                </a>`
            );
        });
    });
});

function SetID(id) {
    window.location.href = "pokemon-page.html?id=" + id;
}
