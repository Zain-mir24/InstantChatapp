
import './App.css';
import Login from './Login'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MessageList from './MessageList'
import React from 'react'


function App() {
  const [message,Setmessage] = React.useState("")
  return (
    <Router>
    <div className="App">
      <Header />
    
      <Login />
    </div>
    </Router>
  );
 
}
// app.js

export default App;
