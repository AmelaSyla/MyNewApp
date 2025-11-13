import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALH8_JRBbLC-HbrCeTpfhMZfUYGW9yA5Y",
  authDomain: "newapp-471f6.firebaseapp.com",
  projectId: "newapp-471f6",
  storageBucket: "newapp-471f6.appspot.com",
  messagingSenderId: "77042057",
  appId: "1:77042057:web:9e4576cf2c7e56c84c1158",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
