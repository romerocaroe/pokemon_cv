import graphqlClient from '../../../apollo'

class PokemonProvider {

    initPokemonCV(){
        return graphqlClient.query({
            query: require('./gql/initPokemonCV.graphql')
        })
    }

}

export default new PokemonProvider()