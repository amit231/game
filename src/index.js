import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
import 'firebase/firestore'
 var firebaseConfig = {
   apiKey: "AIzaSyAhlG6Dt7YzkDI1_BxjG7qBWriggGe_45k",
   authDomain: "secondstep-f4c69.firebaseapp.com",
   projectId: "secondstep-f4c69",
   storageBucket: "secondstep-f4c69.appspot.com",
   messagingSenderId: "726347417680",
   appId: "1:726347417680:web:05e92e57d8aae094aa6955",
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
