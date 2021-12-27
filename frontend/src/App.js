import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";

const Users = () =>  {

  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get("http://localhost:8080/users/all")
    .then(response => {
      console.log(response);
      setUsers(response.data);
    })
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return users.map((user, index) => {
    return (
      <div key={index}>
        <h1>{user.name}</h1>
        <p>{user.password}</p>
      </div>
    )
  })

}

function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
