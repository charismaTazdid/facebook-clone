import React from 'react';
import { Link } from 'react-router-dom';
import FbLogin from './FbLogin';
import Login from './Login';
import './LoginHeader.css'

const LoginHeader = () => {
    return (
        <>
        <div className="Loginheader">
            <Link to="/" className="link"> 
            <img src="https://i.ibb.co/WzybLQK/del.png" alt="" className="header-logo-login" />
            </Link>
            
            <Link className="register-login" to="/register">
            <button className="register-btn-login">Create New Account</button>
            </Link>
        </div>
        {/* <Login/>   I will refactor this later */}
        <FbLogin/>
        </>
    );
};

export default LoginHeader;