// src/frontend/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth }           from 'firebase/auth';

// ← your Firebase config object, from the Firebase console:
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Initialize the Firebase app
const app = initializeApp(firebaseConfig);

// Initialize individual services
export const auth = getAuth(app);

// (Later, if you need Firestore or Storage, do the same—e.g. getFirestore(app) etc.)
