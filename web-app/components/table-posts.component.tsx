import { Table } from 'react-bootstrap';

interface PostsProps {
  posts: Array<{
    title: string;
    author: {
      fullName: string;
    };
  }>;
}

export default function TablePosts({ posts }: PostsProps) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Post title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, i) => (
          <tr key={i}>
            <td>{post.title}</td>
            <td>{post.author.fullName}</td>
            <td>-</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
