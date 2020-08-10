import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../graphql/querys';

import {
  TablePosts,
  ActionsDashboard,
  ModalFormUser,
} from '../components/_index';
import { Container } from 'react-bootstrap';

export default function Index() {
  const { data, loading } = useQuery(GET_POSTS);

  return (
    <Container>
      <ModalFormUser />
      <ActionsDashboard />
      {!loading && <TablePosts posts={data.posts} />}
    </Container>
  );
}
