import Link from "next/link";
import { useRouter } from "next/router";

export default function PostsLists({ posts }) {
  const router = useRouter();

  const gotohome = () => {
    router.push("/");
  };

  return (
    <>
      <h1>Posts</h1>
      <button onClick={gotohome}>Back</button>

      {posts.map((post) => {
        return (
          <>
            <div key={post.id}>
              <Link href={`posts/${post.id}`} passHref>
                <h2>{post.title}</h2>
              </Link>

              <p>{post.body}</p>
            </div>
          </>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
}
