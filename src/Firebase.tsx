// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd01hoe311Iw8csuccBT8gc6XbJmrC9Cg",
  authDomain: "portfolio-62789.firebaseapp.com",
  projectId: "portfolio-62789",
  storageBucket: "portfolio-62789.appspot.com",
  messagingSenderId: "11238436235",
  appId: "1:11238436235:web:fbda14ddcffd6c705a138e",
  measurementId: "G-MWKPEEZEX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);