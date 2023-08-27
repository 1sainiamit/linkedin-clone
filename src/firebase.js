import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDe0wJ4FL4V081A3XTRrJFlnoq_wFBhgoQ",
  authDomain: "linkedin-clone-dcf98.firebaseapp.com",
  projectId: "linkedin-clone-dcf98",
  storageBucket: "linkedin-clone-dcf98.appspot.com",
  messagingSenderId: "832463160389",
  appId: "1:832463160389:web:da6c36b3838f1f56160f2c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
