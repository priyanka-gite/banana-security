import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../authContext/AuthContext";
import { useHistory } from "react-router-dom";

function SignIn() {
    let history = useHistory();
    const {loginFunc} = useContext(AuthContext);
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    function handleChange(e) {
        setEmail(e.target.value)
    }
    function handleChangePassword(e) {
        setPwd(e.target.value)
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

            <form onSubmit={loginFunc} >
                <label>emailadres
                    <input type="email" name="email" value={email} onChange={handleChange}/>
                </label>
                <label>wachtwoord
                    <input type="password" name="password" value={pwd} onChange={handleChangePassword}/>
                </label>
                <button >Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;