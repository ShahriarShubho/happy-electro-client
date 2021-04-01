import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./farebase.confiq";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import "./LogIn.css";
import swal from "sweetalert";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSingIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const newUser = { name: displayName, email: email };
        setLoggedInUser(newUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        swal(`${errorCode}`, `${errorMessage}`, "error");
      });
  };

  return (
    <section className="logInSection">
      <h1>Welcome to LogIn Page</h1>

      <div className="loggedFiled">
        <h3>LogIn With</h3>
        
        <button className="btn btn-primary w-75" onClick={handleGoogleSingIn}>
          Continue with Google
        </button>
        <br />

        <small>
          Don't have any account?
          <span className="text-primary">Create a new account</span>
        </small>
      </div>
    </section>
  );
};

export default LogIn;
