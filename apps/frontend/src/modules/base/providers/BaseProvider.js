import graphqlClient from '../../../apollo'

class BaseProvider {

    fetchComments(){
        return graphqlClient.query({
            query: require('./gql/fetchComments.graphql')
        })
    }

    createComment(username, description){
        return graphqlClient.mutate({
            mutation: require('./gql/createComment.graphql'),
            variables: { 
                username, 
                description 
            }
        })
    }

    updateComment(id, username, description){
        return graphqlClient.mutate({
            mutation: require('./gql/updateComment.graphql'),
            variables: {
                id,
                username, 
                description
            }
        })
    }

    deleteComment(id){
        return graphqlClient.mutate({
            mutation: require('./gql/deleteComment.graphql'),
            variables: {
                id
            }
        })
    }
}

export default new BaseProvider()