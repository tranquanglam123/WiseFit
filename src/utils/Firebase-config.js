// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, doc, setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMkf20kpMesWa8rTb6x2N0gBo_g1X5N5Y",
  authDomain: "wisefit-484a5.firebaseapp.com",
  projectId: "wisefit-484a5",
  storageBucket: "wisefit-484a5.appspot.com",
  messagingSenderId: "803697722042",
  appId: "1:803697722042:web:3901e000e1f253076cf883",
  measurementId: "G-H31FXCBZ89"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);