import { ApolloServer, gql } from 'apollo-server';

// Em GraphQL toda request é do tipo POST
// Toda request bate no MESMO endpoint (/graphql)

// Query -> Obter informações (GET)
// Mutation -> Manipular dados (POST/PUT/PATCH/DELETE)
// Scalar Types -> String, Int, Boolean, Float e ID

// Querys e Mutations são string enviadas no corpo da requisição

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello Wolrd',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server started ar ${url}`));
