import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB4DrJzLfJ_fizBAAEdm2oBBCkPPdPb6m8",
  authDomain: "cloned-e.firebaseapp.com",
  projectId: "cloned-e",
  storageBucket: "cloned-e.appspot.com",
  messagingSenderId: "650852041837",
  appId: "1:650852041837:web:75d35e0ac759068ceceb64",
  measurementId: "G-1EBQ9MNP7F",
}; 
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };