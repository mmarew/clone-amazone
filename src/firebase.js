import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDivQi0JcTM2rBpBiZOiVeWTA54fSkQ654",
  authDomain: "e-clone-bee75.firebaseapp.com",
  projectId: "e-clone-bee75",
  storageBucket: "e-clone-bee75.appspot.com",
  messagingSenderId: "576148544431",
  appId: "1:576148544431:web:dfe010601237b5c3146d5a",
  measurementId: "G-0NVQKB050D",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };
