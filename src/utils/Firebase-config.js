// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4IKvMufMKNUJO4_YdoYw1vHlyoHFVWxw",
  authDomain: "wisefit-fd00e.firebaseapp.com",
  projectId: "wisefit-fd00e",
  storageBucket: "wisefit-fd00e.appspot.com",
  messagingSenderId: "881933862450",
  appId: "1:881933862450:web:d46364a46f21d83d78de2b",
  measurementId: "G-Q9254ECWMW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);