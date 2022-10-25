import * as dotenv from 'dotenv'
dotenv.config()
import {ApolloServer,gql} from 'apollo-server-express'
import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core'
import express from 'express'
import http from 'http'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import admin from 'firebase-admin'
import firebasejson from '../pokemon-cv-firebase-adminsdk-v1szq-ae450996b4.js'
//Types & resolvers modularizados
import { 
  typeDef as Pokemon,
  resolvers as PokemonResolvers
} from './graphql/pokemon.js';

import { 
  typeDef as Comment,
  resolvers as CommentResolvers
} from './graphql/comment.js';

admin.initializeApp({
  credential: admin.credential.cert(firebasejson),
  databaseURL: "https://pokemon-cv-default-rtdb.firebaseio.com"
});

async function startApolloServer() {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs: mergeTypeDefs([Pokemon,Comment]),
    resolvers: mergeResolvers([PokemonResolvers,CommentResolvers]),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise(resolve => httpServer.listen({ port: 5000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`);
}

export default startApolloServer();