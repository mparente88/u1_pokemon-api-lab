//getting
    let pokemonList = []

    const loadPokemonNames = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
        pokemonList = response.data.results.map(pokemon => pokemon.name);
    }
    window.onload = loadPokemonNames;

    const buttonElement = document.querySelector("#clickHere")
    const pokemonNameElement = document.querySelector("#pokemonName")
    const pokemonImageElement = document.querySelector("#pokemonImage")
    const pokemonRearImageElement = document.querySelector(`#pokemonImageRear`)
    const inputBox = document.querySelector(`#searchBar`)
    const pokeHeightElement = document.querySelector(`#pokemonHeight`)
    const pokeWeightElement = document.querySelector(`#pokemonWeight`)
    const abilityOneElement = document.querySelector(`#abilityOne`)
    const abilityTwoElement = document.querySelector(`#abilityTwo`)
    const abilityThreeElement = document.querySelector(`#abilityThree`)
    const statHPElement = document.querySelector(`#statHP`)
    const statAttackElement = document.querySelector(`#statATT`)
    const statDefenseElement = document.querySelector(`#statDEF`)
    const statSpecialAttackElement = document.querySelector(`#statSPATT`)
    const statSpecialDefenseElement = document.querySelector(`#statSPDEF`)
    const statSpeedElement = document.querySelector(`#statSPD`)
    const pokeTypeElement = document.querySelector(`#pokemonTypes`)
    const pokeBG = document.querySelector(`#mainBox`)
    const pokeStatsBG = document.querySelector(`#pokeStatsDiv`)
    let pokeFrontImage = ""
    let pokeBackImage = ""
    const turnLeftElement = document.querySelector(`#turnLeft`)
    const turnRightElement = document.querySelector(`#turnRight`)

//setting
async function pokeSearch () {
    let textInputElement = document.querySelector("#searchBar").value.toLowerCase()
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${textInputElement}/`
    )
    console.log(response)
    let pokePic = response.data.sprites.front_default
    let pokePicRear = response.data.sprites.back_default
    pokeFrontImage = response.data.sprites.front_default
    pokeBackImage = response.data.sprites.back_default
    let pokeName = response.data.name
    let typeArray = []
    for (let i = 0; i < response.data.types.length; i++) {
        typeArray.push(response.data.types[i].type.name.toUpperCase())
    }
    let pokeTypes = response.data.types
    let pokeNumber = response.data.id
    let pokeHeight = response.data.height * .1
    let pokeWeight = response.data.weight * .1
    let abilityOne = response.data.abilities[0].ability.name
    let abilityTwo = "NONE"
    let abilityThree = "NONE"
    let statHP = response.data.stats[0].base_stat
    let statATT = response.data.stats[1].base_stat
    let statDEF = response.data.stats[2].base_stat
    let statSPATT = response.data.stats[3].base_stat
    let statSPDEF = response.data.stats[4].base_stat
    let statSPD = response.data.stats[5].base_stat
    
    if (response.data.abilities[1] === null || response.data.abilities[1] === undefined) {
        abilityTwo = "NONE"
    } else {
        abilityTwo = response.data.abilities[1].ability.name
    }

    if (response.data.abilities[2] === null || response.data.abilities[2] === undefined) {
        abilityThree = "NONE"
    } else {
        abilityThree = response.data.abilities[2].ability.name
    }


    pokemonImageElement.setAttribute(`src`, pokePic)
    pokemonRearImageElement.setAttribute(`src`, pokePicRear)
    pokemonNameElement.innerText = `#${pokeNumber} ${pokeName.toUpperCase()}`
    pokeTypeElement.innerText = `${typeArray.join(`, `)}`
    pokeHeightElement.innerText = `Height: ${pokeHeight.toFixed(2)} meters`
    pokeWeightElement.innerText = `Weight: ${pokeWeight.toFixed(2)} kilograms`
    abilityOneElement.innerText = `Ability One: ${abilityOne.toUpperCase()}`
    if (abilityTwo !== "NONE") {
        abilityTwoElement.innerText = `Ability Two: ${abilityTwo.toUpperCase()}`    
    } else {
    abilityTwoElement.innerText = `Ability: Two: NONE`
    }
    if (abilityThree !== "NONE") {
        abilityThreeElement.innerText = `Ability Three: ${abilityThree.toUpperCase()}`
    } else {
        abilityThreeElement.innerText = `Ability Three: NONE`
    }
    statHPElement.innerText = `HP: ${statHP}`
    statAttackElement.innerText = `ATK: ${statATT}`
    statDefenseElement.innerText = `DEF: ${statDEF}`
    statSpecialAttackElement.innerText = `SP ATK: ${statSPATT}`
    statSpecialDefenseElement.innerText = `SP DEF: ${statSPDEF}`
    statSpeedElement.innerText = `SPD: ${statSPD}`

    let pokeBGType1 = typeArray[0]
    let pokeBGType2 = pokeBGType1

    if (typeArray[1] !== null && typeArray[1] !== undefined) {   
        pokeBGType2 = typeArray[1]
    } else {
        pokeBGType2 = pokeBGType1
    }

    pokeBG.style.background = `linear-gradient(to right, ${pokeTypesObject[`${pokeBGType1}`]}, ${pokeTypesObject[`${pokeBGType2}`]}`

    console.log(pokeBGType1)
    console.log(pokeBGType2)

    pokeStatsBG.style.background = `linear-gradient(to right, ${pokeTypesStatsObject[`${pokeBGType1}`]}, ${pokeTypesStatsObject[`${pokeBGType2}`]}`

}

pokeTypesStatsObject = {
    "NORMAL": "#a1a1a1",
    "FIGHTING": "#ca4f04",
    "FLYING": "#00cbd3",
    "POISON": "#a400cf",
    "GROUND": "#1f1f00",
    "ROCK": "#e0e0e0",
    "BUG": "#0bcb00",
    "GHOST": "#25004b",
    "STEEL": "#006663",
    "FIRE": "#660000",
    "WATER": "#0e00d3",
    "GRASS": "#32b23f",
    "ELECTRIC": "#afbb00",
    "PSYCHIC": "#bb005c",
    "ICE": "#2e43dd",
    "DRAGON": "#000e3b",
    "DARK": "#111",
    "FAIRY": "#aa003b",    
}

pokeTypesObject = {
    "NORMAL": "#a2a2a2",
    "FIGHTING": "#ca7f07",
    "FLYING": "#00cbd5",
    "POISON": "#a600cf",
    "GROUND": "#2f1f00",
    "ROCK": "#e1e1e1",
    "BUG": "#1bcb00",
    "GHOST": "#48006b",
    "STEEL": "#009996",
    "FIRE": "#990000",
    "WATER": "#0e00d7",
    "GRASS": "#74b45f",
    "ELECTRIC": "#afbb00",
    "PSYCHIC": "#bb008c",
    "ICE": "#4e76dd",
    "DRAGON": "#001e6b",
    "DARK": "#222",
    "FAIRY": "#aa005b",
}

buttonElement.addEventListener(`click`, () => {
    pokeSearch()
} )

inputBox.addEventListener(`keypress`, (e) => {
    if (e.key === `Enter`) {
        pokeSearch()
        e.preventDefault()
    }
}
)

pokemonImageElement.addEventListener(`click`, async () => {
    let textInputElement = document.querySelector("#searchBar").value.toLowerCase()
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${textInputElement}/`
    )
    if (pokeFrontImage === response.data.sprites.front_default) {
        pokeFrontImage = response.data.sprites.front_shiny
    
    } else {
        pokeFrontImage = response.data.sprites.front_default
    }
    pokemonImageElement.setAttribute(`src`, pokeFrontImage)
})

pokemonRearImageElement.addEventListener(`click`, async () => {
    let textInputElement = document.querySelector("#searchBar").value.toLowerCase()
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${textInputElement}/`
    )
    if (pokeBackImage === response.data.sprites.back_default) {
        pokeBackImage = response.data.sprites.back_shiny
    
    } else {
        pokeBackImage = response.data.sprites.back_default
    }
    pokemonRearImageElement.setAttribute(`src`, pokeBackImage)
})

//ChatGPT coached me through building and debugging this function
//But it was the only part of the project where I used A.I. for help.

const autocomplete = () => {
    const input = inputBox.value.toLowerCase()
    const suggestionsDiv = document.querySelector(`#suggestions`)

    suggestionsDiv.innerHTML = ``

    if (input.length === 0) {
        suggestionsDiv.style.display = `none`
        return
    }

    const filteredList = pokemonList.filter(pokemon => pokemon.startsWith(input))

    if (filteredList.length > 0) {
        filteredList.forEach(pokemon => {
            const suggestionItem = document.createElement(`div`)
            suggestionItem.textContent = pokemon
            suggestionItem.onclick = () => {
                inputBox.value = pokemon
                suggestionsDiv.style.display = 'none'
                pokeSearch()
            }
            suggestionsDiv.appendChild(suggestionItem)
        })
        suggestionsDiv.style.display = `block`
    } else {
        suggestionsDiv.style.display = `none`
    }
}

inputBox.addEventListener(`input`, autocomplete)