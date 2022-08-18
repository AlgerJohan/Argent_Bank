import React from "react";
import ArgentBankLogo from "../../../Assets/argentBankLogo.png";
import "../../css/nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  const dataLinksConnected = [
    {
      path: "/user",
      icon: "fa fa-user-circle",
      title: "Tony",
    },
    {
      path: "/",
      icon: "fa fa-sign-out",
      title: "Sign Out",
    },
  ];
  const dataLinksDisconnected = [
    {
      path: "/signin",
      icon: "fa fa-user-circle",
      title: "Sign In",
    },
  ];
  const connected = false;
  const dataLinks = connected ? dataLinksConnected : dataLinksDisconnected;
  const links = dataLinks.map((link, index) => (
    <Link key={index} className="main-nav-item" to={link.path}>
      <i className={link.icon}></i>
      {link.title}
    </Link>
  ));
  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={ArgentBankLogo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>{links}</div>
      </nav>
    </div>
  );
};

export default Nav;
