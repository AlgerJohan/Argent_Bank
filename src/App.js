import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Pages/homepage";
import SignIn from "./Components/Pages/signIn";
import User from "./Components/Pages/user";
import Nav from "./Components/Pages/Partials/_nav";
import SignOut from "./Components/Pages/signOut";
import Footer from "./Components/Pages/Partials/_footer";
import { homepage, user, signin, signout } from "./Components/routes";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path={homepage} element={<HomePage />} />
          <Route path={signin} element={<SignIn />} />
          <Route path={user} element={<User />} />
          <Route path={signout} element={<SignOut />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
