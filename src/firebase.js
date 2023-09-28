import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-kPfH4ZNVJtdWNxUIJVHkaEa2TzdXV0M",
  authDomain: "emmanuel-technologies.firebaseapp.com",
  projectId: "emmanuel-technologies",
  storageBucket: "emmanuel-technologies.appspot.com",
  messagingSenderId: "693407476225",
  appId: "1:693407476225:web:1741a98bc54a74046b2e00",
  measurementId: "G-SY417HB2DG",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

