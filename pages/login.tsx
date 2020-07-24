import Link from 'next/link';

export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </div>

      <div>
        <Link href="/auth/register">
          <a>Register Page</a>
        </Link>
      </div>
    </div>
  );
}
