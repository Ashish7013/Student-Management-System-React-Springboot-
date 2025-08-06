import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    department: "",
    rollno: "",
  });

  const { name, email, phone, dob, gender, address, department, rollno } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/student/${id}`, user);
      console.log("User updated");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/student/${id}`);
      console.log(result.data);
      setUser(result.data.data);
    } catch (err) {
      console.log("Error loading user:", err);
    }
  };
    loadUser();
  }, []);

  

  return (
    <div className="contanier">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={submitData}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Name"
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter your Phone no"
                name="phone"
                value={phone}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                DOB
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter your Date of birth"
                name="dob"
                value={dob}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Gender"
                name="gender"
                value={gender}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Address"
                name="address"
                value={address}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Department"
                name="department"
                value={department}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="rollno" className="form-label">
                Roll No
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Roll no"
                name="rollno"
                value={rollno}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
