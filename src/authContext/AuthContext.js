import {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider ({children}) {
    const [isAuth,setIsAuth] = useState(false);
    let history = useHistory();

    function login() {
        setIsAuth(true);
        console.log("loginButton called auth is true")
        history.push("/profile")
    }
    function logout (){
        setIsAuth(false)
        history.push("/")
        console.log("logout button called auth is false")
    }
    // function register (){
    //     setIsAuth(false)
    //     console.log("register is called auth is false")
    //     navigate ("/")
    // }
    const data = {
        loginFunc : login,
        logoutFunc : logout,
        // registerFunc : register,
        isAuthorized : isAuth,
    }

    return (
        <AuthContext.Provider  value={data}>
            {children}
        </AuthContext.Provider>

    )

}
export default AuthContextProvider;