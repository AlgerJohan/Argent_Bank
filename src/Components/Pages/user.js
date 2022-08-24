import React from "react";
import "../css/user.css";
import Accounts from "./DataMapPages/account";
import { data } from "./DataMapPages/userData";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSignInData } from "../../features/signInSlice";

const User = () => {
  const dispatch = useDispatch;
  dispatch(setSignInData({ data }));
  axios
    .post("http://localhost:3001/api/v1/user/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.body.token);
      localStorage.setItem("user", res.data.user);
    })
    .catch((err) => {
      alert(err.response.data.message);
      console.log(err);
    });
  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Accounts data={data} />
      </main>
    </div>
  );
};

export default User;
