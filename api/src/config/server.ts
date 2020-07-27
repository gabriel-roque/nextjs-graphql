import { ApolloServer, PubSub } from 'apollo-server';
import * as mongoose from 'mongoose';

export async function startServer({ typeDefs, resolvers }) {
  await mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const pubsub = new PubSub();
  const server = new ApolloServer({
    cors: { origin: '*', credentials: false },
    typeDefs,
    resolvers,
    context: { pubsub },
  });
  await server
    .listen()
    .then(({ url }) => console.log(`🔥 Apollo Server started at ${url}`));
}
