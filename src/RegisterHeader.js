import React from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';
import './RegisterHeader.css'

const RegisterHeader = () => {
    return (
        <>
        <div className="header">
            <div className="header-left">
                <Link to="/">
                    <img src="https://i.ibb.co/WzybLQK/del.png" alt="facebook logo" className="header-logo"/>
                </Link>
            </div>
            <div className="header-right">
                <form>
                    <input id="input-mail" type="email" placeholder="type email" />
                    <input id="input-pass" type="password" placeholder="type password" />
                    <button type="submit" className="header-submit">Log In</button>
                </form>
            </div>

        </div>
        <Register/>
         </>
    );
};

export default RegisterHeader;