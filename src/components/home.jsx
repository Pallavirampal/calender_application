import React from "react";
import { Link } from "react-router-dom";
import '../CSS/home.css'

function Home(props) {
  return (
    <>
      <div className="Box">
        <div className="box">
          <h1>
            <Link to="/login">Login</Link>
          </h1>
          <h1>
            <Link to="/signup">Signup</Link>
          </h1>
          <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
        </div>
      </div>
    </>
  );
}

export default Home;