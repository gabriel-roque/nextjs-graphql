import { useEffect } from 'react';

import { Button, Modal } from 'react-bootstrap';

import { client } from '../graphql/apollo-client';
import { useQuery } from '@apollo/react-hooks';
import { MODAL_USER_IS_OPEN } from '../graphql/querys';

export default function ModalFormUser() {
  const { data: modalsStatus } = useQuery(MODAL_USER_IS_OPEN);

  function handleClose() {
    client.writeData({
      data: {
        modalsStatus: {
          user: false,
          __typename: 'Modals',
        },
      },
    });
  }

  return (
    <Modal show={modalsStatus.modalsStatus.user} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
