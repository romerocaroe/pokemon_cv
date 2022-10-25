import {gql} from 'apollo-server-express'
import { 
    fetchCommentService,
    createCommentService,
    updateCommentService,
    deleteCommentService
 } from "../services/commentService.js"

export const typeDef = gql`
    type Comment {
        id: String
        description: String
        username: String
    }

    type Query {
        fetchComment: [Comment]
    }

    type Mutation {
        createComment(username: String, description: String):String,
        updateComment(id: String, username: String, description: String):String,
        deleteComment(id: ID):String
    }
`;

export const resolvers = {
    Query: { 
        fetchComment: (_) => { 
            return fetchCommentService()
        }
    },
    Mutation: {
        createComment(_,{ username, description },{}){
            console.log(username, description)
            return createCommentService(username, description);
        },
        updateComment(_,{ id, username, description },{}){
            return updateCommentService(id, username, description);
        },
        deleteComment(_,{ id },{}){
            return deleteCommentService(id);
        }
    }
}