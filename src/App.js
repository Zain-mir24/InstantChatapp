
import './App.css';
import Login from './Login'
import Header from './Header'
import MessageList from './MessageList'
import React from 'react'


function App() {
  const [message,Setmessage] = React.useState("")
  return (
    <div className="App">
      <Header />
    
      <Login />
    </div>
  );
}
// app.js

export default App;
