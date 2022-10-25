import graphqlClient from '../../../apollo'

class BaseProvider {

    initPokemonCV(){
        return graphqlClient.query({
            query: require('./gql/initPokemonCV.graphql')
        })
    }

}

export default new BaseProvider()