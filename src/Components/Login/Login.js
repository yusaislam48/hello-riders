import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var {displayName, email} = result.user;
            const signedInUser = {name: displayName, email: email, vehicleClicked: ''};
            console.log(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch((error) => {

        });
    };
    
    return (
        <div className='d-flex justify-content-center'>
            <div>
                <div>
                    <button onClick={handleGoogleSignIn}  type="button" class="btn btn-danger">Sign In</button>
                </div>
                <div>
                    <input placeholder='Email' type="text" value=''/><br/>
                    <input placeholder='Password' type="password" value=''/><br/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Login;