import React from 'react'
import { Link,useNavigate} from "react-router";

function Login() {


    const navigate = useNavigate();
    function handleLogin(e){
        e.preventDefault();
        console.log("Login")
        navigate("/dashboard")
    }
  return (
    <div>
        <h1>Login</h1>
      <from onSubmit={handleLogin}>
        <input type="text" name="username" id="" />
        <button>Login</button>

      </from>
    </div>
  )
}

export default Login
