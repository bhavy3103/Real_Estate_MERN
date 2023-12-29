// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bmark-estate.firebaseapp.com",
  projectId: "bmark-estate",
  storageBucket: "bmark-estate.appspot.com",
  messagingSenderId: "807605731299",
  appId: "1:807605731299:web:f2e1cda6ece2a78910ead6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);