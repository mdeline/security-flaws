import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

const Users = () =>  {
  const fetchUsers = () => {
    axios.get("http://localhost:8080/users/all")
    .then(response => {
      console.log(response);
    })
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return <h1>Hello</h1>
}

function App() {
  return (
    <div className="App">
      <Users />
      <p>Hello</p>
    </div>
  );
}

export default App;
