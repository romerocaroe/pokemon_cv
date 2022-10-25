import {gql} from 'apollo-server-express'
import { initPokemonCVService } from "../services/pokemonService.js"

export const typeDef = gql`
    type Stats {
        name: String,
        base_stat: Int
    }
    type Ability {
        name: String,
        is_hidden: Boolean
    }
    type Pokemon {
        name: String,
        pic: String,
        id: ID,
        height: Float,
        weight: Float,
        evolution: Boolean,
        abilities: [Ability],
        types: [String],
        stats: [Stats]
    }
    type Query {
        initPokemonCV: Pokemon
    }
`;

export const resolvers = {
    Query: { 
        initPokemonCV: (_) => { 
            return initPokemonCVService()
        }
    }
}
