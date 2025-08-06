import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
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
  const {name, email, phone, dob, gender, address, department, rollno } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const submitData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/student",user)
        .then(()=> {console.log('resolved')})
        .catch((err)=>{console.log(err)})
    navigate("/");
  };

  return (
    <div className="contanier">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form >
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
                phone
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
                Dob
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
                Roll no
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
            <button type="submit" className="btn btn-outline-primary" onClick={submitData} >
              Submit
            </button>
            <Link  className="btn btn-outline-danger mx-2" to="/">
              cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
