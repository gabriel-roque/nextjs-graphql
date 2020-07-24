import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();
  const { article } = router.query;

  return (
    <div>
      <h1>Blog - Article ({article}) </h1>
    </div>
  );
}
