import './dashboard.css';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const [login, setLogin] = useState(false);
  const history = useHistory();

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if(response.data.loggedIn == false) {
        history.push('/');
      }
    })
  }, [history]);

    return (
      <>
      <div id = {(function() {
        console.log(login);
      })()}></div>

      <div className="sidenav">
      <a href="#">Import Data</a>
      <a href="#">Campaign</a>
      </div>

      <div className="main">
        <h2>Dashboard for Admin</h2>
      </div>
      </>
    );
}