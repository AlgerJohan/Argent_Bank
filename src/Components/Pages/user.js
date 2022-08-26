import React, { useEffect } from "react";
import "../css/user.css";
import Accounts from "./DataMapPages/account";
import { data } from "./DataMapPages/userData";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { setSignInData } from "../../features/signInSlice";
import { setUser } from "../../features/signInSlice";
const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.signIn.user);
  const token = useSelector((state) => state.signIn.token);
  // dispatch(setSignInData({ data }));
  useEffect(() => {
    axios
      .post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(setUser(res.data.body));
        console.log(res);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err);
      });
  }, [dispatch, token]);
  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          {user && (
            <h1>
              Welcome back
              <br />
              {user.firstName} {user.lastName}
            </h1>
          )}
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Accounts data={data} />
      </main>
    </div>
  );
};

export default User;
