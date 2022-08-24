import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState(false);

  const postData = async (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      e.preventDefault();
      setError(true);
      return false;
    } else {
      setSubmitted(true);
      setError(false);
    }

    await axios.post(`http://localhost:3333/employees`, {
      firstName,
      lastName,
      email,
      password,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h3 className="text-center text-success">
          User {firstName} {lastName} successfully registered!!
        </h3>
      </div>
    );
  };
  // Showing error message if error is true
  const errorMessage = () => {
    let msg = "";
    if (firstName === "") {
      msg = "Please enter first name ";
    }
    if (lastName === "") {
      msg += "Please enter last name ";
    }
    if (
      email === "" ||
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(email) === false
    ) {
      msg += "Please enter email in format ";
    }
    if (password === "") {
      msg += "Please enter password ";
    }

    if (
      firstName === "" &&
      lastName === "" &&
      email === "" &&
      password === ""
    ) {
      msg = "Please enter all the fields";
    }

    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h4 className="text-center text-danger">{msg}</h4>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="text-center h2" >Registration Form</div>
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <div className="col-md-3"></div>
      <div className="col-md-6 jumbotron align-items-center shadow">
        <form onSubmit={postData}>
          <div className="form-group ">
            <label>FirstName</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group ">
            <label> LastName</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group ">
            <label> Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label> Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

         <div className="text-center"> <button type="submit " className="btn btn-primary">
            Submit
          </button></div>
          <div className="text-center p-3">
           
              Already a member?
            
           
              <Link to="/New_Login" className="nav-link">
                Login
              </Link>
          
          </div>
        </form>
      </div>
      <header></header>
    </div>
  );
}

export default Registration;
