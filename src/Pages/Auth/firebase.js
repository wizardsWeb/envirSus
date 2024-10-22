// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl9nxcYyM-kG5U2G4Dr9dwuFLDIxkulY0",
  authDomain: "craft-code-76aaf.firebaseapp.com",
  projectId: "craft-code-76aaf",
  storageBucket: "craft-code-76aaf.appspot.com",
  messagingSenderId: "551792849896",
  appId: "1:551792849896:web:36ae05c62b6b3d5fa0aa5d",
  measurementId: "G-WDW6J7VH9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const db = getFirestore(app);
