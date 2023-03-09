import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../authContext/AuthContext";
import { useHistory } from "react-router-dom";

function SignIn() {
    let history = useHistory();
     const {loginFunc} = useContext(AuthContext);
        return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={loginFunc} >
        <p>*invoervelden*</p>
        <button >Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;