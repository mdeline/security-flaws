import React from "react";
import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Space Today</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
        <Link to="/home">Home</Link> | {" "}
        <Link to="/subscribe">Subscribe</Link> | {" "}
        <Link to="/admin">Admin</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
