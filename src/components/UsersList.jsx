import { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);       // store users
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null);     // error state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users");

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading users...</h2>;
  }

  if (error) {
    return (
      <h2 style={{ padding: "20px", color: "red" }}>
        Error: {error}
      </h2>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Users List</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
            background: "white"
          }}
        >
          <h3>
            {user.name?.firstname} {user.name?.lastname}
          </h3>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
