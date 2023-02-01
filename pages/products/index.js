import Link from "next/link";
export default function Product() {
  return (
    <>
      <h1>Products</h1>
      {/* <h3>Product1</h3> */}
      <Link href="/products/1">
        <h3>Product1</h3>
      </Link>
      <Link href="/products/2">
        <h3>Product2</h3>
      </Link>
      <Link href="/products/3">
        <h3>Product3</h3>
      </Link>
      <Link href="/">
        <h3>Back</h3>
      </Link>
    </>
  );
}
