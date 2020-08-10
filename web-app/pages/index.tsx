import { useState, useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery, gql } from '@apollo/client';
import { GET_USERS, GET_POSTS } from '../graphql/querys';
import { CREATE_USER, DELETE_USER } from '../graphql/mutations';

import { client } from '../graphql/apollo-client';

import TablePosts from '../components/table-posts.component';

import { Container } from 'react-bootstrap';

export default function Index() {
  const { data, loading } = useQuery(GET_POSTS);

  const { data: modal } = useQuery(gql`
    query GetModalStatus {
      modalStatus @client
    }
  `);

  const { data: books } = useQuery(gql`
    query getBooks {
      books @client {
        name
      }
    }
  `);

  const { data: person } = useQuery(gql`
    query getPerson {
      person @client {
        name
      }
    }
  `);

  useEffect(() => {
    console.log(modal);
    console.log(books);
    console.log(person);
  }, [modal, books, person]);

  client.cache.writeData({ data: { modalStatus: true } });

  client.cache.writeData({
    data: {
      books: [
        {
          name: 'The big bang',
          __typename: 'Books',
        },
        {
          name: 'The power of code!',
          __typename: 'Books',
        },
      ],
    },
  });

  return <Container>{!loading && <TablePosts posts={data.posts} />}</Container>;
}
