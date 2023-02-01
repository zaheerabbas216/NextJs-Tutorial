import { useRouter } from "next/router";
import UsersComponent from "../../components/users";

export default function Users({ userData }) {
  const router = useRouter();
  const gotohome = () => {
    router.push("/");
  };

  return (
    <>
      <h1>Users</h1>
      <button onClick={gotohome}>Back</button>
      {userData.map((items) => {
        return (
          <div className="card" key={items.id}>
            <UsersComponent users={items} />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  //   !to get the data from the api
  // * you need to write an async function getStaticProps and return the props with the response object
  // ! get static props only runs on the server side
  //   ! the getStaticProps cannot be used for the client side data fetching
  //   ! you should always write the return with the props object and pass the props to the function
  return {
    props: {
      userData: data,
    },
  };
}
