// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTZuWrpyi-6rrwWkQ3ceAW5TVITrvvly4",
  authDomain: "fwms-3a643.firebaseapp.com",
  projectId: "fwms-3a643",
  storageBucket: "fwms-3a643.appspot.com",
  messagingSenderId: "226953448190",
  appId: "1:226953448190:web:16602a15149fd82b4a73af",
  measurementId: "G-F216P1MNE1"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);

const analytics = getAnalytics(app);