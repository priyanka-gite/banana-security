import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
// import {AuthContext} from "../authContext/AuthContext";

function SignUp() {
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const [username,setUsername] = useState("")
    function handleChange(e) {
        setEmail(e.target.value)
    }
    function handleChangePassword(e) {
        setPwd(e.target.value)
    }
    function handleChangeUsername(e) {
        setUsername(e.target.value)
    }
  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form >
          <label>emailadres
              <input type="email" name="email" value={email} onChange={handleChange}/>
          </label>
          <label>wachtwoord
              <input type="password" name="password" value={pwd} onChange={handleChangePassword}/>
          </label>
          <label>gebruikersnaam
              <input type="text" name="username" value={username} onChange={handleChangeUsername}/>
          </label>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;