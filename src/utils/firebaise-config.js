// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM8H8YOTrHyj53g5Ds1uZgvYx9Lox1rY0",
  authDomain: "netflix-project-99416.firebaseapp.com",
  projectId: "netflix-project-99416",
  storageBucket: "netflix-project-99416.appspot.com",
  messagingSenderId: "1050954364782",
  appId: "1:1050954364782:web:0dfc991893562991a4337f",
  measurementId: "G-90V39F6RVB",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
