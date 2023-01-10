import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYABX13FzkQpiiK9u40l9pmQ1-KnR8Mbg",
  authDomain: "mye-4f48a.firebaseapp.com",
  projectId: "mye-4f48a",
  storageBucket: "mye-4f48a.appspot.com",
  messagingSenderId: "412676513515",
  appId: "1:412676513515:web:a0f63ecee17b9e5d4f28ae",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };
