import React, { useState } from "react";
import axios from "axios";
import "../css/signin.css";
import { useDispatch } from "react-redux";
import { setToken } from "../../features/signInSlice";
import { useNavigate } from "react-router-dom";
/**@reach/
 * I'm trying to send a post request to my backend server, and if the request is successful, I want to
 * redirect the user to the /user page.
 */
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/v1/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.status === 200) {
          dispatch(setToken(res.data.body.token));
          navigate("/user");
        } else {
          alert(res.data.message);
        }
        // localStorage.setItem("logged", true);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.error(err);
      });
  };

  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form className="form-group" onSubmit={(e) => handlerSubmit(e)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={email}
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default SignIn;
