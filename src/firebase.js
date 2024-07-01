// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// import * as firebase from 'firebase';

// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB7Z_YKaBz6zRmfIIZG4dB1CIcsC4Cpfow",
  authDomain: "canvas-n-co.firebaseapp.com",
  storageBucket: "canvas-n-co.appspot.com",
  projectId: "canvas-n-co",
  messagingSenderId: "352314111866",
  appId: "1:352314111866:web:da2603ccfef9217bb948c3",
  measurementId: "G-4X8V1RSDMZ",
};
// initializing app with firebase config
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initializing app with firebase database
const db = firebaseApp.firestore();
// initializing app with firebase authentication
const auth = firebase.auth();

export { db, auth };
