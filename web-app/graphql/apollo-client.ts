import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();

cache.writeData({
  data: {
    modalsStatus: {
      user: false,
      post: false,
      __typename: 'Modals',
    },
  },
});

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache,
});
