import React, {useState, useEffect} from "react";
import axios from "axios";

function Users() {
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
          <h2>{user.name}</h2>
          <p>{user.password}</p>
        </div>
      )
    })
}

export default Users