import React from "react";
import "../css/signin.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form className="form-group">
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* PLACEHOLDER DUE TO STATIC SITE  */}
            <Link className="sign-in-button" to="/user">
              Sign In
            </Link>
            {/* SHOULD BE THE BUTTON BELOW 
            <button className="sign-in-button">Sign In</button> */}
          </form>
        </section>
      </main>
    </div>
  );
};

export default SignIn;
