// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATfa9sJbJJT3prSghj85MamPpnDri0bU8",
  authDomain: "coffee-shop-55e85.firebaseapp.com",
  projectId: "coffee-shop-55e85",
  storageBucket: "coffee-shop-55e85.firebasestorage.app",
  messagingSenderId: "146787708951",
  appId: "1:146787708951:web:c4c1fec11e7871d0f6ec52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
