const form = document.querySelector('form')
form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const pokemonName = document.querySelector('input').value
  await pokemonData(pokemonName)
})


const pokemonData = async (pokemonName) => {


    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const data = await response.json()

    const pokeImage = document.createElement('img')
    pokeImage.setAttribute('src', data['sprites']['front_default'])
    const pokeCard = document.querySelector('.poke-card')
    pokeCard.append(pokeImage)

    const pokeName = document.createElement('h1')
    pokeName.innerText = data['name']
    pokeCard.append(pokeName)
}

pokemonData()