import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  //For fetch users from API
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  //For add new user
  const addUser = async () => {
    if (!newUser.trim()) return;
    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newUser }),
      });
      const data = await res.json();
      setUsers([...users, data]);
      setNewUser("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      });
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // For load users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fetch API Example</h1>

      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={addUser}>Add User</button>

      {/* for show users */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => deleteUser(user.id)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchAPI;
