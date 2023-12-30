// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx3RjRERO0zlzdn4sBm5xUgsqK60pG2tI",
  authDomain: "netflixgpt-1d9fa.firebaseapp.com",
  projectId: "netflixgpt-1d9fa",
  storageBucket: "netflixgpt-1d9fa.appspot.com",
  messagingSenderId: "500691784615",
  appId: "1:500691784615:web:578ba5dfcd4a5bacbc1c82",
  measurementId: "G-9NPDG10DT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();