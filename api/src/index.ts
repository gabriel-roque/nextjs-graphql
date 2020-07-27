import { startServer } from './config/server';

import typeDefs from './graphql/typeDefs.graphql';
import resolvers from './graphql/resolvers.graphql';

startServer({ typeDefs, resolvers });
