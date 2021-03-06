import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// const express= require('express')
// const socketio = require('socket.io')

// const app = express()

// const io=socketio(server)
// const { Socket } = require('dgram')
// const port=process.env.PORT ||3001

// const publicDirectoryPath = path.join(__dirname,'../public')
// app.use(express.static(publicDirectoryPath)) 


// io.on('connection',(socket)=>{

// })

// app.listen(port,()=>{
//   console.log(`Server is up on port ${port}!`)
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

