// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClYegwdNhBZIcqWDtmCm9FVxkfqkXxKzE",
  authDomain: "netflix-gpt-3fc6f.firebaseapp.com",
  projectId: "netflix-gpt-3fc6f",
  storageBucket: "netflix-gpt-3fc6f.firebasestorage.app",
  messagingSenderId: "430952782971",
  appId: "1:430952782971:web:35c0f51845429a53af16de",
  measurementId: "G-YSS6Y5FFWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);