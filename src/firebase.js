// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB4DrJzLfJ_fizBAAEdm2oBBCkPPdPb6m8",
  authDomain: "cloned-e.firebaseapp.com",
  projectId: "cloned-e",
  storageBucket: "cloned-e.appspot.com",
  messagingSenderId: "650852041837",
  appId: "1:650852041837:web:75d35e0ac759068ceceb64",
  measurementId: "G-1EBQ9MNP7F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
