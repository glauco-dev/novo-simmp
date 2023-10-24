import { initializeApp, getApps } from "firebase/app";
import { Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvBmPKTc1xR5PdwAemX9KFLqRX4goG_WM",
  authDomain: "simmpfirebase.firebaseapp.com",
  databaseURL: "https://simmpfirebase-default-rtdb.firebaseio.com",
  projectId: "simmpfirebase",
  storageBucket: "simmpfirebase.appspot.com",
  messagingSenderId: "41649693709",
  appId: "1:41649693709:web:21ffe4efc087d9967ce144"
};

// Initialize Firebase
let firebase = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export default Firestore;

