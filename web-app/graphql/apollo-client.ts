import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();

cache.writeData({
  data: {
    modalStatus: false,
    books: [
      {
        name: 'dasd',
        __typename: 'Books',
      },
    ],
    person: {
      name: 'Anderson',
      __typename: 'Person',
    },
  },
});

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache,
});
