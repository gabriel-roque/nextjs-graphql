import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers {
    users {
      id: _id
      fullName
    }
  }
`;

export const GET_POSTS = gql`
  query getPosts {
    posts {
      title
      author {
        fullName
      }
    }
  }
`;

export const MODAL_USER_IS_OPEN = gql`
  query getStatusModalUser {
    modalsStatus @client {
      user
    }
  }
`;
