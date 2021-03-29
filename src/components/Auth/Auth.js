import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../fire-auth.config";
firebase.initializeApp(firebaseConfig);


const Auth = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '', 
        email: '',
        photo:''
    });
    
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user
                const signedInUser = {
                  isSignedIn: true,
                  name: displayName,
                  email: email,
                  photo: photoURL
                };
                setUser(signedInUser)  
            })
            .catch(err => {
                console.log(err)
            })
        
    }
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                  isSignedIn: false,
                  name: "",
                  email: "",
                  photo: "",
                };
                setUser(signedOutUser); 
            })
            .catch(err => {
            console.log(err)
        })
    }
    // console.log(user);
    return (
      <div>
        {user.isSignedIn ? (
          <button onClick={handleSignOut}>Sign out</button>
        ) : (
          <button onClick={handleSignIn}>Sign in</button>
        )}
        {user.isSignedIn && (
          <div>
            <img src={user.photo} alt="" />
            <p>Welcome, {user.name}!</p>
            <p>Your email: {user.email}</p>
          </div>
        )}
      </div>
    );
};

export default Auth;