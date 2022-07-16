import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe1CPpXvQo-OaCJaHU1fZHZFbFsubirqM",
  authDomain: "front-end-ec1f5.firebaseapp.com",
  projectId: "front-end-ec1f5",
  storageBucket: "front-end-ec1f5.appspot.com",
  messagingSenderId: "1046402837273",
  appId: "1:1046402837273:web:6ad58a3752b9b4c0693388",
  measurementId: "G-K5X6YP2L5T"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var users = firebase.auth().currentUser;
export { db, auth };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
