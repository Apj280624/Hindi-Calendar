import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./styles.css";

import img from "../../assets/images/cal_icon_1.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/user/login");
  };

  return (
    <nav className="nav-outer-nav navbar navbar-expand-lg fixed-top">
      <img className="nav-brand-icon" src={img} alt="brand-icon" />
      {/* <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto"> */}
      <p className="nav-title-text">
        Hindi Calendar 2023 <br />
        <span className="nav-brand-text">by APJTech</span>
      </p>
      {/* </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
