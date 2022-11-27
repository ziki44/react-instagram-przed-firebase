import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCxeRgaTLO12uVu3uEXa0dqsSe9JgrQYpw",
  authDomain: "alx-instagram.firebaseapp.com",
  projectId: "alx-instagram",
  storageBucket: "alx-instagram.appspot.com",
  messagingSenderId: "851241559479",
  appId: "1:851241559479:web:61e838bed0f67447ed7432"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);