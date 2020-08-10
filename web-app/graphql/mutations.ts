import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($firstName: String!, $lastName: String!, $email: String) {
    user: createUser(
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        active: true
      }
    ) {
      id: _id
      fullName
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
