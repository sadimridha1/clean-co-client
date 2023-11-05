
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB5Kvmk4PjclpGd_KE_romT_m9Fs6F_-T4",
  authDomain: "clean-co-services-1cc1b.firebaseapp.com",
  projectId: "clean-co-services-1cc1b",
  storageBucket: "clean-co-services-1cc1b.appspot.com",
  messagingSenderId: "914192907292",
  appId: "1:914192907292:web:9b609110bbcaa7984973d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

