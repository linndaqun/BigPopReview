import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBOdxcQDLRWjxE3etbk77KyCJBCdQiyrew",
    authDomain: "bigpopreview-30c8a.firebaseapp.com",
    projectId: "bigpopreview-30c8a",
    storageBucket: "bigpopreview-30c8a.appspot.com",
    messagingSenderId: "1070920407966",
    appId: "1:1070920407966:web:4920000e8c671c75dbd48f"
  };  

export const app = firebase.initializeApp(config);