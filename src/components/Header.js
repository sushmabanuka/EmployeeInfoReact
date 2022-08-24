import React from "react";
import New_Login from "./New_Login";
import Registration from "./Registration";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-info bg-gradient-info rounded-0 shadow">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active ">
            <a className="nav-link  text-white font-weight-bold" href="/">
              <h4>Home </h4><span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      
      </div>
    </nav>
   
  
   </div>
  );
};

export default Header;
