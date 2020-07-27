import axios from 'axios';
import { gql } from 'apollo-server-micro';

export default function Index() {
  const queryUsers = gql`
    query {
      users {
        fullName
      }
    }
  `;

  async function getUsers() {
    await axios
      .post('http://localhost:4000', { query: queryUsers.loc.source.body })
      .then((resp) => {
        console.log(resp.data);
      });
  }
  getUsers();

  return <div>User</div>;
}
