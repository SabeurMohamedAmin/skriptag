// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_SKRIPTAG_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_SKRIPTAG_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_SKRIPTAG_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_SKRIPTAG_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_SKRIPTAG_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_SKRIPTAG_FIREBASE_APP_ID,
  measurementId: process.env.NVUE_APP_SKRIPTAG_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged };