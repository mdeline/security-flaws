import React, {useState, useEffect} from "react";
import axios from "axios";

function Admin() {
    const [users, setUsers] = useState([]);
  
    const fetchSubscribers= () => {
      axios.get("http://localhost:8080/subscribers/all")
      .then(response => {
        console.log(response);
        setUsers(response.data);
      })
    }
    useEffect(() => {
      fetchSubscribers();
    }, []);

    return users.map((user, index) => {
      return (
        <div key={index}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )
    })
}

export default Admin