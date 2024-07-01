import React, { useState } from "react";
import "./Login.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
// import loginBG from "./Images/login_banner.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "firebase/auth";
import "firebase/firestore";
// import auth  from "/firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault(); // prevent the page to be refresh

    // firebase login stuff
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault(); // prevent the page to be refresh

    // firebase register stuff
    // it will create new user with email and password
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // succesfully created a new user.
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login__page">
      <div className="wrapper">
        <form>
          <h1>Login</h1>
          <div className="input_box">
            <input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <PersonIcon className="icon" />
          </div>
          <div className="input_box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <LockIcon className="icon" />
          </div>
          <div className="remember_forgot">
            {/* <label>
              <input type="checkbox" /> Remember me
            </label> */}
            {/* <a href="#"> Forgot password</a> */}
          </div>
          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Login
          </button>
          <div className="register_link">
            <button onClick={register} className="login__registerButton">
              {" "}
              Don't have an account? Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
