// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVtAAN5WZ73hI6zJU3x5NWCdNpA6-B66s",
  authDomain: "devbestiary.firebaseapp.com",
  projectId: "devbestiary",
  storageBucket: "devbestiary.firebasestorage.app",
  messagingSenderId: "255208906103",
  appId: "1:255208906103:web:149885043f84b10d8d5572",
  measurementId: "G-FKTT1MLD43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
