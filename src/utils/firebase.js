// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgN1978l0aoIEo5e73Ql3TZcYPxHyfy9Q",
  authDomain: "netflixgpt-427e6.firebaseapp.com",
  projectId: "netflixgpt-427e6",
  storageBucket: "netflixgpt-427e6.appspot.com",
  messagingSenderId: "682172697522",
  appId: "1:682172697522:web:b11d02670697a2485772ab",
  measurementId: "G-TQ7DQW9JYM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//////////////////////////////////////////////
export const auth = getAuth();
