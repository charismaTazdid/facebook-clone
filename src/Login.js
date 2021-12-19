
import './Login.css'
import React, { useState } from 'react';
import { Link,  } from 'react-router-dom';



const Login = () => {
    // state here
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

  

    // handle login button
    const handleLogin = (event) => {
        event.preventDefault();
        
    };

    return (
        <div className="login">
            <div className="login-container">
                <h3>Log In To Facebook</h3>
                <form>
                    <center>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Type your Email" name="" id="mail" />
                    </center>
                    <center>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="passowrd" name="" id="pass" />
                    </center>
                    <center>
                    <Link to="/home">
                    <button  type="submit" className="login-btn">Log In</button>
                        </Link>
                        {/* <button onClick={handleLogin} type="submit" className="login-btn">Log In</button> */}
                    </center>
                    <center>
                        <h6>Forgot passowrd? </h6>
                    </center>
                    <center>
                        <hr />
                    </center>
                    <center>
                        <Link to="/register">
                            <button className="login-create-new-account"> Create New Account </button>
                        </Link>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default Login;