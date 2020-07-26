import { ApolloServer, gql } from 'apollo-server';
import { getUsers, getUserByEmail, createUser } from './fake.services';

// Em GraphQL toda request é do tipo POST
// Toda request bate no MESMO endpoint (/graphql)

// Query -> Obter informações (GET)
// Mutation -> Manipular dados (POST/PUT/PATCH/DELETE)
// Scalar Types -> String, Int, Boolean, Float e ID

// Querys e Mutations são string enviadas no corpo da requisição

const typeDefs = gql`
  # Quando possui o <tipo>! estamos dizendo que é obrigatório
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  # Usa-se  [User!]! para não permitir que a api retorne um array com null
  type Query {
    hello: String
    users: [User!]!
    getUserByEmail(email: String!): User!
  }

  type Mutation {
    createUser(name: String, email: String): User!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello Wolrd',
    users: () => getUsers(),
    getUserByEmail: (_, args) => getUserByEmail(args.email),
  },

  Mutation: {
    createUser: (_, args) => createUser(args.name, args.email),
  },
};

// Query para obter por um email
/* 
query {
  user: getUserByEmail(email: "gabriel@gmail.com") {
    name,
    email,
    active
  }
}
 */

//  Mutation de criar usuario
/* 
 mutation {
  user: createUser(name: "Camila", email: "camila@gmail.com") {
    _id
    email
    name
    active
  }
}
 */

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server started ar ${url}`));
