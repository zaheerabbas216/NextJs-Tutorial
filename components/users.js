export default function UsersComponent({ users }) {
  return (
    <>
      <div className="usersCard">
        <p>
          <strong>{users.name}</strong>
        </p>
        <p>{users.username}</p>
        <p>{users.email}</p>
      </div>
    </>
  );
}
