// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from "firebase/firestore"
import constants from 'expo-constants'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqWrP5Y0A0SRiIa66Pmh4AlJrtPrt2d9Q",
  authDomain: "currency-2a2c8.firebaseapp.com",
  projectId: "currency-2a2c8",
  storageBucket: "currency-2a2c8.appspot.com",
  messagingSenderId: "521256253972",
  appId: "1:521256253972:web:63f155fb13547103a58501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage=getStorage(app)
const firestore=getFirestore(app)
export {app,storage,firestore};