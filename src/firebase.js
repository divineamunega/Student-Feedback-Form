// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI3TQOCvCXpbT3oC5IQszLueyJkwXR07k",
  authDomain: "student-feedback-form-84596.firebaseapp.com",
  projectId: "student-feedback-form-84596",
  storageBucket: "student-feedback-form-84596.appspot.com",
  messagingSenderId: "68569141656",
  appId: "1:68569141656:web:6d7a67df5d65a040cd5bed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
