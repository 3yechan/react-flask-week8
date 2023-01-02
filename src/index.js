import React from 'react' 
import ReactDOM from 'react-dom/client'
import App from './App' 
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app";
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
     <App/>
    </BrowserRouter>

)

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBFGXR7Reg1Q46gDxcV8bdlUhCKQxgdnc",
  authDomain: "fullstackweek8.firebaseapp.com",
  projectId: "fullstackweek8",
  storageBucket: "fullstackweek8.appspot.com",
  messagingSenderId: "508208122965",
  appId: "1:508208122965:web:e3863fe76e03f2607998dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);