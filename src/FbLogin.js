import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import './FbLogin.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import firebaseConfig from './firebase';
import { UserContext } from './App';
import { Link, useLocation, useNavigate } from 'react-router-dom';


 export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore();

const FbLogin = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        image: '',
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const signIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // // The signed-in user info.
                // const user = result.user;
                const { displayName, email, photoURL } = result.user;
                // console.log(result.user)
                const signedInUser = {...user};
                signedInUser.email = email;
                signedInUser.name = displayName;
                signedInUser.image = photoURL;
                signedInUser.password = '';
                // console.log(signedInUser)
                setUser(signedInUser)
                setLoggedInUser(signedInUser)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, email, errorMessage)
            });

    };


    return (
        <div className='fb-login'>
            <div className="login-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt="" />
            </div>
            
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
           
           

        </div>
    );
};

export default FbLogin;