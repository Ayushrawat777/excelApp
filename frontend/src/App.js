import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Home from "./components/utils/Home";
import Login from "./components/utils/Login";
import Signup from "./components/utils/Signup";
import All from "./components/utils/All";
import Clients from "./components/utils/Clients";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/all"} element={<All />} />
        <Route path={"/clients"} element={<Clients />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
