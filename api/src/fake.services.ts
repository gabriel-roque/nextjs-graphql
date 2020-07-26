const users = [
  {
    _id: String(Math.random()),
    name: 'Gabriel',
    email: 'gabriel@gmail.com',
    active: true,
  },
  {
    _id: String(Math.random()),
    name: 'Lucas',
    email: 'lucas@gmail.com',
    active: false,
  },
  {
    _id: String(Math.random()),
    name: 'Rammon',
    email: 'ramon@gmail.com',
    active: true,
  },
];

export function getUsers() {
  return users;
}

export function getUserByEmail(email: string) {
  return users.find((user) => user.email === email);
}

export function createUser(name: string, email: string) {
  const newUser = { _id: String(Math.random()), name, email, active: true };

  users.push(newUser);
  return newUser;
}
