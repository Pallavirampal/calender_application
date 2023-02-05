// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5LXZtdjqoKl2VveBx_CHjWc8E6Yh4I_A",
  authDomain: "calender-application-d6002.firebaseapp.com",
  projectId: "calender-application-d6002",
  storageBucket: "calender-application-d6002.appspot.com",
  messagingSenderId: "746251681133",
  appId: "1:746251681133:web:4f83d1adbda0105eec2e64",
  measurementId: "G-8YL49HLMBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};
