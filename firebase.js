// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//Auth
import {GoogleAuthProvider, getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjYkW91FWA7EC1E-pk_Ckop6ct8iOaEbo",
  authDomain: "fix-it-nextjs-react.firebaseapp.com",
  projectId: "fix-it-nextjs-react",
  storageBucket: "fix-it-nextjs-react.appspot.com",
  messagingSenderId: "1088213231684",
  appId: "1:1088213231684:web:990ea02ae0ff44520bf411",
  measurementId: "G-NPF732HVCZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//exported here so other files can have access to auth, provider and app

const provider = new GoogleAuthProvider()
const auth = getAuth

//exported here so other files can have access to auth, provider and app
export {app, provider, auth}
