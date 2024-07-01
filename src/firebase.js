// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// import * as firebase from 'firebase';

// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// initializing app with firebase config
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initializing app with firebase database
const db = firebaseApp.firestore();
// initializing app with firebase authentication
const auth = firebase.auth();

export { db, auth };
