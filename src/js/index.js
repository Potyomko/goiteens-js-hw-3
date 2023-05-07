const pokemonCard = document.querySelector('.js-card-container');
const searchForm = document.querySelector('.js-search-form');

let searchingPocemon = ''

searchForm.addEventListener("submit", searchPocemon)

function searchPocemon(e) {
    e.preventDefault()
    const input = e.srcElement[0];
    searchingPocemon = input.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchingPocemon}`)
.then(response => response.json())
.then(pocemon => {
        const murkup = makeCard(pocemon);
    pokemonCard.innerHTML = murkup;
    input.value = "";
}).catch(error => {
    alert('Упс, такого покемона не існує(');
    pokemonCard.innerHTML = '';
}
)
}

function makeCard(pokemon) {
  return  ` <div class="card">
  <div class="card-img-top">
    <img src=${pokemon.sprites.front_default}" alt="${pokemon.name}>
  </div>
  <div class="card-body">
    <h2 class="card-title">Ім'я:${pokemon.name} </h2>
    <p class="card-text">Вага:${pokemon.weight} </p>
    <p class="card-text">Зріст: </p>

    <p class="card-text"><b>Вміння</b></p>
    <ul class="list-group"></ul>
    
      <li class="list-group-item"></li>
    
    </ul>
  </div>
</div> `
}