import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDHhkq6l6YXgg3A9Mx0S7Deg4Bse0xHRUA",
  authDomain: "rocket-store-app.firebaseapp.com",
  projectId: "rocket-store-app",
  storageBucket: "rocket-store-app.appspot.com",
  messagingSenderId: "756809617384",
  appId: "1:756809617384:web:327f8f0cf5b7f572161e5d"
};

initializeApp(firebaseConfig);
export const db = getFirestore()
