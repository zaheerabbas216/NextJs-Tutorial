import { useRouter } from "next/router";
// !catching all the routes
function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <h3>
        View docs for {params[0]} for the concept {params[1]}
      </h3>
    );
  } else if (params.length === 1) {
    return <>view docs for the feature {params[0]}</>;
  }
  return (
    <>
      <h5>The Docs home page</h5>
    </>
  );
}

export default Doc;
