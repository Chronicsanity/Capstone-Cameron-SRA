import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import './Register.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useHistory } from "react-router-dom";

export default function Register() {

  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")
  const [emailReg, setEmailReg] = useState("")
  const [accessReg, setAccessReg] = useState("")

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);

  const history = useHistory();
  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
      access: accessReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(false);
      } else {
        setLoginStatus(true);
      }
    });
  };

  return(
    <>
    <Navbar />
    <div className="login-wrapper">
      <h1>Create an account!</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value)
          }}/>
        </label>
        <label>
          <p>Password</p>
          <input  type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value)
          }}/>
        </label>
        <label>
          <p>Email</p>
          <input  type="text"
          onChange={(e) => {
            setEmailReg(e.target.value)
          }}/>
        </label>
        <label>
          <p>Access Level</p>
          <p>Options: admin, root, caller</p>
          <input  type="text"
          onChange={(e) => {
            setAccessReg(e.target.value)
          }}/>
        </label>
        <div>
          <button type="submit" onClick={ register }>Submit</button>
        </div>
      </form>

      <h1>Log in</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text"
          onChange={(e) => {
            setUsername(e.target.value)
          }}/>
        </label>
        <label>
          <p>Password</p>
          <input  type="text"
          onChange={(e) => {
            setPassword(e.target.value)
          }}/>
        </label>
        <div>
          <button type='button' onClick={ login }>Submit</button>
        </div>
      </form>

    </div>
    <Footer />
    </>
    /*() => history.push('/dashboard')*/
  )
}