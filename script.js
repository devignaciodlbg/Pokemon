async function asyncCall() {
  let html = ''
  let index = 1
  let prefix = ''

  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
  const json = await response.json()
  const pokemons = json['results']

  for (const pokemon of pokemons) {
    if (index <= 9) {
      prefix = '00'
    } else if (index >= 10 && index <= 99) {
      prefix = '0'
    } else {
      prefix = ''
    }
    const poke_id = prefix + index
    html += `<div class="poke-card"><h2>${pokemon.name}</h2><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${poke_id}.png"/><p>${poke_id}</p></div>`
    index++
  }

  document.getElementById('poke-cards').innerHTML = html
}

asyncCall()
