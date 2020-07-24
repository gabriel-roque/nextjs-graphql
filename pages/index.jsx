import Link from 'next/link';
import Head from 'next/head';

export default function Index() {
  return (
    <div>
      <Head>
        <title>My fisrt app NextJs</title>
      </Head>

      <h1>Home Page</h1>
      <div>
        <Link href="/login">
          <a>Login page</a>
        </Link>
      </div>

      <div>
        <Link href="/blog/[article]" as="/blog/The-Big-Gang">
          <a>The big bang article</a>
        </Link>
      </div>
    </div>
  );
}
