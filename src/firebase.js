import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDR4a5O63HuCJFTsofcjsFYggVdK0ip5po",
  authDomain: "safesteps8.firebaseapp.com",
  projectId: "safesteps8",
  storageBucket: "safesteps8.appspot.com",
  messagingSenderId: "898593968538",
  appId: "1:898593968538:web:89f0e8cd019964bfd1ea23"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();