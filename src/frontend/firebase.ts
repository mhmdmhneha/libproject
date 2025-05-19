// src/frontend/firebase.ts
import { initializeApp }      from "firebase/app";
import { getAuth }            from "firebase/auth";
import { getFirestore }       from "firebase/firestore";
// (you can omit analytics if you’re not using it)
import { getAnalytics }       from "firebase/analytics";

const firebaseConfig = {
  apiKey:           "AIzaSyCkzOe0Srr10CIfIAIEqrZQbpZ2ngTKKY4",
  authDomain:       "libproject-d71af.firebaseapp.com",
  projectId:        "libproject-d71af",
  storageBucket:    "libproject-d71af.appspot.com",      // note “.appspot.com”
  messagingSenderId:"578640237109",
  appId:            "1:578640237109:web:271a2639075fbac83f977c",
  measurementId:    "G-ZRD9WWZHF8"                       // optional
};

// initialize the core Firebase “app”
const app = initializeApp(firebaseConfig);

// now grab the individual SDKs you’ll use
export const auth      = getAuth(app);
export const db        = getFirestore(app);
// optional: analytics
export const analytics = getAnalytics(app);
