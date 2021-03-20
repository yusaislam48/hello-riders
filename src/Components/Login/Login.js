import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [newUser, setNewUser] = useState(false);
    const [passCode, setPassCode] = useState();
    const [confirmPassCode, setConfirmPassCode] = useState({
        isMatched: false,
        message: ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        passwordVerify: '',
        emailVerify: '',
        success: false
    });
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var {displayName, email} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email
            };
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch((error) => {

        });
    };
    
    const handleBlur =(e)=>{
        let isFieldValid = true;
        let newUserInfo;
        if (e.target.name === 'email') {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isFieldValid = re.test(e.target.value);

            newUserInfo = {...user};
            newUserInfo.emailVerify = 'Please follow this method [abcd@gmail.com]';
            setUser(newUserInfo);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            
            newUserInfo = {...user};
            newUserInfo.passwordVerify = 'Password should be 7 character & have to be min 1 number';
            setUser(newUserInfo);
            setPassCode(e.target.value);
        }
        if (e.target.name === 'confirmPassword') {
            if (e.target.value == passCode) {
                const isPassMatched = {
                    isMatched: true,
                    message: "Password Matched"
                }
                setConfirmPassCode(isPassMatched);
                isFieldValid = false;
            }
        }
        
        if (isFieldValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);

            newUserInfo.passwordVerify = '';
            setUser(newUserInfo);
            
            newUserInfo.emailVerify = '';
            setUser(newUserInfo);

            const isPassMatched = {
                isMatched: true,
                message: "Password didn't matched"
            }
            setConfirmPassCode(isPassMatched);
        }
    };

    const handleSubmit = (e) =>{
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                // var user = userCredential.user;
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                updateUserName(user.name);
            })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                // Signed in
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                console.log('user', res.user)
                
                const {displayName, email} = res.user;
                const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email
                };
                setLoggedInUser(signedInUser);
                history.replace(from);
                })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }

        e.preventDefault();
    };

    const updateUserName = (name) =>{
        const user = firebase.auth().currentUser;
        user.updateProfile({
        displayName: name,
        }).then(function() {
            console.log('username updated');
        }).catch(function(error) {
            console.log(error);
        });
    };
    
    return (
        <div className='d-flex justify-content-center'>
            <div className="mb-5">
                <div className='mb-5 mt-5 user-form'>
                    <form onSubmit={handleSubmit}>
                    {/* custom login  */}
                        { newUser && <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input onBlur={handleBlur} name="name"  className="form-control" placeholder="Enter Name"/>
                        </div> }
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input required onBlur={handleBlur} name="email" required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input required onBlur={handleBlur} name="password" required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            <small id="emailHelp" className="form-text text-muted">Password should be 7 character & have to be min 1 number</small>
                        </div>

                        {newUser && <div className="form-group">
                            <label for="exampleInputPassword2">Confirm Password</label>
                            <input required onBlur={handleBlur} name="confirmPassword" required type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password"/>
                        </div>}

                        <div className="form-group form-check">
                            <input onChange={() => setNewUser(!newUser)} name="newUser" type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Didn't have any account? Create account!</label>
                        </div>
                        <button type="submit" className="btn btn-primary">{newUser?'Create Account':'Log In'}</button>
                        
                    </form>
                    <br/>
                    {
                       confirmPassCode.isMatched && <h6 style={{color:"red"}}>{confirmPassCode.message}</h6>
                    }
                    <h6 style={{color:"red"}}>{user.error}</h6>
                    <h6 style={{color:"red"}}>{user.passwordVerify}</h6>
                    <h6 style={{color:"red"}}>{user.emailVerify}</h6>
                    { user.success && <h6 style={{color:"green"}}>User {newUser ? 'created' : "Logged In"} Successfully!</h6> }
                </div>
                
                {/* <div>
                    <button onClick={handleGoogleSignIn}  type="button" className="btn btn-danger">Sign In</button>
                </div> */}

                <div onClick={handleGoogleSignIn} className='signInWithGoogle'>
                    Continue with Google
                </div>
            </div>
        </div>
    );
};

export default Login;