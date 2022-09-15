import React, { useEffect, useState } from "react";
import "../css/user.css";
import Accounts from "./DataMapPages/account";
import { data } from "./DataMapPages/userData";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/signInSlice";
import { useNavigate } from "react-router-dom";

/**
 * It's a React component that uses hooks to get the user's data from the Redux store and then uses
 * axios to make a request to the server to get the user's data from the database.
 */
const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [displayForm, setDisplayForm] = useState(false);
  const user = useSelector((state) => state.signIn.user);
  const token = useSelector((state) => state.signIn.token);

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
      })
      .catch((err) => {
        navigate("/signIn");
        console.error(err.response.data.message);
      });
  }, [dispatch, token, navigate]);

  /**
   * It's a function that takes an event as an argument, prevents the default behavior of the event,
   * checks if the first and second inputs are empty, if they are, it alerts the user to fill them, if
   * they aren't, it sends a PUT request to the server with the first and second inputs as the body, and
   * if the request is successful, it dispatches the setUser action with the response body as the
   * payload, and sets the displayForm state to false.
   * @param e - the event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      alert("Veuillez remplir tous les champs");
    } else {
      axios
        .put(
          "http://localhost:3001/api/v1/user/profile",
          { firstName: e.target[0].value, lastName: e.target[1].value },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          dispatch(setUser(res.data.body));
          setDisplayForm(false);
        })
        .catch((err) => {
          console.error(err.response.data.message);
        });
    }
  };

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
          <button className="edit-button" onClick={() => setDisplayForm(true)}>
            Edit Name
          </button>
          {displayForm && (
            <form className="editForm" onSubmit={handleSubmit}>
              <div className="editName">
                <label htmlFor="firstName">FirstName</label>
                <input type="text" placeholder="First Name" />
                <label htmlFor="lastName">LastName</label>
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="choice">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setDisplayForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Accounts data={data} />
      </main>
    </div>
  );
};

export default User;
