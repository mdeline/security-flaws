import React from "react";
import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Security Flaws App</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
        <Link to="/">Home</Link> | {" "}
        <Link to="/subscribe">Subscribe</Link> | {" "}
        <Link to="/users">Users</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
