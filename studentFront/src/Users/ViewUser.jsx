import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});

 useEffect(() => {
  axios
    .get(`http://localhost:8080/student/${id}`)
    .then((res) => {
      console.log("Full response from backend:", res.data);
      setUser(res.data.data); // ✅ accessing actual student object
    })
    .catch((err) => console.error("Error fetching user:", err));
}, [id]);

  return (
    <div className="container mt-4">
      <div className="card border shadow p-4">
        <h2 className="mb-4 text-center">Student Details</h2>

        {/* Image Section (replace src with dynamic value if available) */}
        <div className="text-center mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK1VnYgsPjfrYOJDjB9xYPW6EYovWEbx9m1g&s"
            alt="Profile"
            className="rounded-circle"
            width="150"
            height="160"
          />
        </div>

        {/* Details Section */}
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Name:</strong> {user.name}
          </li>
          <li className="list-group-item">
            <strong>Email:</strong> {user.email}
          </li>
          <li className="list-group-item">
            <strong>Phone:</strong> {user.phone}
          </li>
          <li className="list-group-item">
            <strong>DOB:</strong> {user.dob}
          </li>
          <li className="list-group-item">
            <strong>Gender:</strong> {user.gender}
          </li>
          <li className="list-group-item">
            <strong>Address:</strong> {user.address}
          </li>
          <li className="list-group-item">
            <strong>Department:</strong> {user.department}
          </li>
          <li className="list-group-item">
            <strong>Roll No:</strong> {user.rollno}
          </li>
        </ul>

        <div className="text-center mt-4">
          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
