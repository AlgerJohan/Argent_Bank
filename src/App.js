import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Pages/homepage";
import SignIn from "./Components/signIn";
import User from "./Components/user";
import { homepage, user, signin } from "./Components/routes";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={homepage} element={<HomePage />} />
          <Route path={signin} element={<SignIn />} />
          <Route path={user} element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
