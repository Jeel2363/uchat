// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzKtomyzlsVX_-kw-Epvr7G8xP3Sni4MM",
  authDomain: "chat-77cd1.firebaseapp.com",
  projectId: "chat-77cd1",
  storageBucket: "chat-77cd1.appspot.com",
  messagingSenderId: "451976822267",
  appId: "1:451976822267:web:eb78058326a5f919cedf5e",
  measurementId: "G-WWCNM2Y5GH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
