import Link from "next/link";
import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();

  const gotopost = () => {
    router.push("/posts");
  };

  return (
    <>
      <h1>Post Details</h1>
      <button onClick={gotopost}>Back</button>
      <p>{post.id}</p>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((item) => {
    return {
      params: {
        postId: `${item.id}`,
      },
    };
  });

  return {
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },
    //   {
    //     params: { postId: "2" },
    //   },
    //   {
    //     params: { postId: "3" },
    //   },
    // ],
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
