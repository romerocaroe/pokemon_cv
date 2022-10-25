import axios from 'axios'

export const initPokemonCVService = async () => {
	try {
		const pokemonData = await fetchData()
		const pokemonOrderData = await orderData(pokemonData)
		return pokemonOrderData
	} catch (err){
		console.error("Error: " + err)
		return err
	}
}

const fetchData = async () => {
	try {
		const res = await axios({
			url: process.env.URL_POKEAPI,
			method: 'GET',
		})
		return res.data;
	} catch(err){
		console.error("Error: " + err)
		return err
	}
}

export const orderData = async (pokemonData) => {
	try {
		let pokemon = {
			name: "",
			pic: "",
			id: 0,
			height: 0,
			weight: 0,
			evolution: null,
			abilities: [],
			types: [],
			stats: [],
		}
		pokemon.name = pokemonData?.species?.name != "" ? pokemonData?.species?.name : ""
		pokemon.pic = pokemonData?.sprites?.other?.home?.front_default != "" ? pokemonData?.sprites?.other?.home?.front_default : ""
		pokemon.id = pokemonData?.id
		pokemon.height = pokemonData?.height
		pokemon.weight = pokemonData?.weight
		pokemon.abilities = pokemonData?.abilities.length != 0 ? pokemonData?.abilities.map(elem => ({name: elem.ability.name, is_hidden: elem.is_hidden })) : []
		pokemon.types = pokemonData?.types.length != 0 ? pokemonData?.types.map(elem => elem.type.name) : []
		pokemon.stats = pokemonData?.stats.length != 0 ? pokemonData?.stats.map(elem => ({ name:elem.stat.name, base_stat:elem.base_stat })) : []

		return pokemon
	} catch (err){
		console.error("Error: " + err)
		return err
	}
}