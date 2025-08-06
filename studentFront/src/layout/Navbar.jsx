import React from "react";
import { Link } from "react-router-dom";
import '../style/App.css'

export default function Navbar() {
  return (
    <div>
      <nav  className="navbar navbar-expand-lg navbar-dark bg-dark  " id="nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Full stack application
          </a>

          <Link className="btn btn-outline-light" to="/adduser">
            AddUser
          </Link>
        </div>
      </nav>
    </div>
  );
}
