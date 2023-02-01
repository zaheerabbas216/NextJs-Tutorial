import { useRouter } from "next/router";
import Link from "next/link";

export default function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;

  const placeOrder = () => {
    alert("order placed!!");
    router.push("/products");
  };

  // !Dynamic Routes
  return (
    <>
      <h3>The Product Details of {productId}</h3>
      <button onClick={placeOrder}>Place order</button>
      <Link href="/products">Back</Link>
    </>
  );
}
