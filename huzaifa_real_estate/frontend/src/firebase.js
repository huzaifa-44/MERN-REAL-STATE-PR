// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernrealstatepr.firebaseapp.com",
  projectId: "mernrealstatepr",
  storageBucket: "mernrealstatepr.firebasestorage.app",
  messagingSenderId: "828881284150",
  appId: "1:828881284150:web:2fe0f3261aa2497118bc97"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);