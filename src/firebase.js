import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGWrMvUCOZMRaIZdNtwUpuuFA3LMySZl0",
  authDomain: "workplace-application.firebaseapp.com",
  projectId: "workplace-application",
  storageBucket: "workplace-application.firebasestorage.app",
  messagingSenderId: "139554708379",
  appId: "1:139554708379:web:450fcf014a6f5e57899f3e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const timestamp = serverTimestamp;

export { db, timestamp };