import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDqxr-iRFSUJ2Qj3fA2Qi52P8gIX0rXZRI",
    authDomain: "projectwithreact.firebaseapp.com",
    projectId: "projectwithreact",
    storageBucket: "projectwithreact.firebasestorage.app",
    messagingSenderId: "806718578697",
    appId: "1:806718578697:web:f6956497697d9570fa18d8",
    measurementId: "G-24YHWPCBGQ",
    databaseURL: "https://projectwithreact-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);