import { useState, useEffect } from 'react';
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { GET_USERS, GET_POSTS } from '../graphql/querys';
import { CREATE_USER, DELETE_USER } from '../graphql/mutations';

import TablePosts from '../components/table-posts.component';

import { Container } from 'react-bootstrap';

export default function Index() {
  const { data, loading, error } = useQuery(GET_POSTS);

  console.log(data, loading, error);

  return <Container>{!loading && <TablePosts posts={data.posts} />}</Container>;
}
