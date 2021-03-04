import React, { useState, useContext, useEffect } from "react";
import Structure from "../../reusable/structure/structure";
import "./Auth.css";
import "firebase/auth";
import firebase from "firebase/app";
import "firebase/firestore";
import useAuthReducer from '../../store/useAuthReducer'
import authContext from "../../store/useAuthContext";
function Auth(props) {
  let [authState,authDispatch]=useAuthReducer();
  let [showScore, setShowScore] = useState(false);
  let currContext = useContext(authContext);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [signStart, setSignStart] = useState(false);
  let logInHandler = () => {
    currContext.authDispatch({type:'logging-State'})
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        currContext.authDispatch({
          type: "sign-in",
          payload: userCredentials.user,
        });
        setTimeout(() => {
          props.history.push("/app");
        }, 1300);
      })
      .catch((t) => {
        alert(t.message);
        window.location.reload()      });
  };
  // call karna padega persistant login k liye
  let signUpHandler = () => {
    currContext.authDispatch({type:'logging-State'})
    console.log("in sign up process");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        console.log("was successful");
        currContext.authDispatch({
          type: "sign-up",
          payload: userCredentials.user,
        });
        setTimeout(() => {
          props.history.push("/app");
        }, 1300);
      })
      .catch((t) => {
        alert(t.message);
        window.location.reload()        
      });
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        currContext.authDispatch({
          type: "sign-in",
          payload: user,
        });
        props.history.push("/app");
      }
    });
  }, []);
  useEffect(()=>{
    if(currContext.authState.isLoggingStart){
    console.log('start of auth')
    setSignStart(!signStart)}
  },[currContext.authState.isLoggingStart])

  return (
    <div className="back">
      <Structure logoutHandler={props.logoutHandler} animateLogo={signStart}>
        <div className="authBack">
          <div className="emaildiv">
            <input
              type="email"
              className="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter the email"
            />
            <svg
              className="email-arrow arrow"
              width="134"
              height="192"
              viewBox="0 0 134 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 187.799L125 96L3.5 4.20131"
                stroke="#CE2626"
                stroke-width="10"
              />
            </svg>
          </div>

          <div className="passworddiv">
            <input
              type="password"
              className="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <svg
              className="password-arrow arrow"
              width="134"
              height="192"
              viewBox="0 0 134 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 187.799L125 96L3.5 4.20131"
                stroke="#CE2626"
                stroke-width="10"
              />
            </svg>
          </div>

          <button disabled={signStart} className="sign-in" onClick={logInHandler}>
            Sign In
          </button>
          <button disabled={signStart} className="sign-up" onClick={signUpHandler}>
            Sign Up
          </button>
        </div>
      </Structure>
    </div>
  );
}

export default Auth;
