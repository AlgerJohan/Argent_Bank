import React from "react";
import ArgentBankLogo from "../Assets/argentBankLogo.png";
import "./css/nav.css";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={ArgentBankLogo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
