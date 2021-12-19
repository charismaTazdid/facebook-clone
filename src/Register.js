
import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div className="register">
            <div className="register-container">
                <h1>Create A New Account </h1>
                <h1>It's Quick and Easy</h1>
                <form>
                    <center>
                        <input type="name" className="register-name" placeholder="first name" />
                        <input type="name" className="register-name" placeholder="last name" />
                    </center>
                    <center>
                        <input type="email" placeholder="email" />
                    </center>
                    <center>
                        <input type="password" placeholder="password" />
                    </center>
                    <h5 className="rgister-date">Date of Birth</h5>
                
                    <input type="date" />
                   <h5 className="register-gender"> Gender </h5>
                <div className="register-radiocontainer">
                    <input type="radio" name="gender" value="male" id="male" />
                    <label htmlFor="male"> Male </label>
                    <input type="radio" name="gender" value="female"  id="female"/>
                    <label htmlFor="female"> Female </label>
                    <input type="radio" name="gender" value="other" id="other"/>
                    <label htmlFor="other"> Other </label>
                </div>

                <p className="register-policy">
                    By clicking Sign Up you agree to our {" "}
                    <span> Terms, Data Policy </span> and <span>cookie Policy </span>
                    . You may recive SMS notifications from us and can opt out at any time.

                </p>
                
                <center>
                    <Link to="/login"> 
                      <button type="submit" className="create-btn"> Create Account</button>
                    </Link>
                </center>
                
                </form>
            </div>
        </div>
    );
};

export default Register;