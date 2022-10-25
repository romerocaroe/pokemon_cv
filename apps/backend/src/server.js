import * as dotenv from 'dotenv'
dotenv.config()
import {ApolloServer,gql} from 'apollo-server-express'
import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core'
import express from 'express'
import http from 'http'

//Types & resolvers modularizados
import { 
  typeDef as Pokemon,
  resolvers as PokemonResolvers
} from './graphql/pokemon.js';

async function startApolloServer() {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs: Pokemon,
    resolvers: PokemonResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise(resolve => httpServer.listen({ port: 5000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`);
}

export default startApolloServer();