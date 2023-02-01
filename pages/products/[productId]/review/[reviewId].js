import { useRouter } from "next/router";

export default function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <>
      <h4>
        The review id {reviewId}, for the product id {productId}
      </h4>
    </>
  );
}
