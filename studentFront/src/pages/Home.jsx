import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/student");
    setUsers(result.data.data); // Ensure your API response structure matches
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/student/${id}`);
    loadUsers(); // Refresh list
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Student List</h2>
        <Link className="btn btn-success" to="/adduser">
          Add User
        </Link>
      </div>
      <table className="table border shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Dob</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Depart</th>
            <th>Roll no</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dob}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>{user.department}</td>
              <td>{user.rollno}</td>
              <td>
                <Link
                  to={`/viewuser/${user.id}`}
                  className="btn btn-info btn-sm mx-1"
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-primary mx-2"
                  to={`/edituser/${user.id}`}
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="btn btn-danger btn-sm mx-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
