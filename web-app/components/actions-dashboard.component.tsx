import { ButtonGroup, Button } from 'react-bootstrap';

import { client } from '../graphql/apollo-client';

export default function ActionsDashboard() {
  function handleModal(status: boolean) {
    client.writeData({
      data: {
        modalsStatus: {
          user: status,
          __typename: 'Modals',
        },
      },
    });
  }

  return (
    <ButtonGroup className="mt-3 mb-3">
      <Button variant="warning" onClick={() => handleModal(true)}>
        Create User
      </Button>
      <Button variant="primary">Create Post</Button>
    </ButtonGroup>
  );
}
