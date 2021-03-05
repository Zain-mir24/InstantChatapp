import "./App.css";
import Login from "./Login";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mainpage from "./mainpage";
import React from "react";
const path = require('path')
const express= require('express')
const socketio = require('socket.io')
const http = require('http')

function App() {
  const [message, Setmessage] = React.useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Login />
          </Route>
          <Route path="/mainpage">
            <Mainpage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
// app.js

export default App;
