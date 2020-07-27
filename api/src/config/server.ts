import { ApolloServer } from 'apollo-server';
import * as mongoose from 'mongoose';

export async function startServer({ typeDefs, resolvers }) {
  await mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const server = new ApolloServer({ typeDefs, resolvers });
  await server
    .listen()
    .then(({ url }) => console.log(`🔥 Apollo Server started at ${url}`));
}
