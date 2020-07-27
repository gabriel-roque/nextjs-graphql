import { gql, useQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';

const GET_USERS = gql`
  query {
    users {
      id: _id
      fullName
    }
  }
`;

const CREATE_USER = gql`
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

const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

export default function Index() {
  const [users, setUsers] = useState([
    { id: '', firstName: '', lastName: '', email: '', fullName: '' },
  ]);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const { data } = useQuery(GET_USERS);
  const [createUser, { data: userCreated }] = useMutation(CREATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);

  useEffect(() => {
    if (data !== undefined) setUsers(data.users);
  }, [data]);

  useEffect(() => {
    if (userCreated !== undefined) {
      setUsers([...users, userCreated.user]);
    }
  }, [userCreated]);

  function popUserList(user) {
    setUsers(users.filter((_user) => _user.id !== user.id));
  }

  return (
    <div>
      <ul>
        {users.map((user, i) => (
          <div key={i}>
            <li>{user.fullName}</li>
            <button
              onClick={() => {
                deleteUser({ variables: { id: user.id } });
                popUserList(user);
              }}
            >
              DELETE
            </button>
          </div>
        ))}
      </ul>

      <hr />

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createUser({ variables: { ...form } });
            setForm({ firstName: '', lastName: '', email: '' });
          }}
        >
          <input
            type="text"
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
