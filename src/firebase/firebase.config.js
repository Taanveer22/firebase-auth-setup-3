// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4fpWrqXHmttx2H_0hjtgL42Nhof1569o",
  authDomain: "simple-firebase-3-d1b02.firebaseapp.com",
  projectId: "simple-firebase-3-d1b02",
  storageBucket: "simple-firebase-3-d1b02.firebasestorage.app",
  messagingSenderId: "594102936216",
  appId: "1:594102936216:web:02ef539a148ebe0487e6ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
