// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getJSDocTypeParameterTags } from "typescript";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-QKvlYNXdiQU7PCXT--3Iu3Io9GHlOsA",
  authDomain: "react-course-56c02.firebaseapp.com",
  projectId: "react-course-56c02",
  storageBucket: "react-course-56c02.appspot.com",
  messagingSenderId: "257095359446",
  appId: "1:257095359446:web:847a1652d6b840860c2277",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
