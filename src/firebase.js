import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC6W3_QQN4QROqguikMrPac8y-JOpQqEn8',
  authDomain: 'react-48df0.firebaseapp.com',
  projectId: 'react-48df0',
  storageBucket: 'react-48df0.appspot.com',
  messagingSenderId: '528338704084',
  appId: '1:528338704084:web:1747ba984df4d6a6de4d41',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
