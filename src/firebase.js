// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC0MmnKXszb7x2dpkE5N9LNV8PIG2WLOPk",
  authDomain: "scribd-intern.firebaseapp.com",
  projectId: "scribd-intern",
  storageBucket: "scribd-intern.appspot.com",
  messagingSenderId: "185175611041",
  appId: "1:185175611041:web:3d9ae195351826389342e0",
  measurementId: "G-7V0YN9EXRS",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
