import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Home Page</h2>

      <Link href="/products">
        <h2>Products</h2>
      </Link>
      <Link href="/blogs/firstBlog">
        <h2>First Blog</h2>
      </Link>
      <Link href="/users">
        <h2>Users</h2>
      </Link>
      <Link href="/posts">
        <h2>Posts</h2>
      </Link>
    </>
  );
}
