import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Database, getDatabase, ref, set } from "firebase/database";
import { useContext } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyDqxr-iRFSUJ2Qj3fA2Qi52P8gIX0rXZRI",
    authDomain: "projectwithreact.firebaseapp.com",
    databaseURL: "https://projectwithreact-default-rtdb.firebaseio.com",
    projectId: "projectwithreact",
    storageBucket: "projectwithreact.firebasestorage.app",
    messagingSenderId: "806718578697",
    appId: "1:806718578697:web:f6956497697d9570fa18d8",
    measurementId: "G-24YHWPCBGQ",
    DatabaseURL: "https://projectwithreact-default-rtdb.firebaseio.com",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDatabase = getDatabase(firebaseApp);


const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const firebaseProvider = (props) => {

    const getUser = (key, data) => {
        return set(ref(firebaseDatabase, key), data)
    }

    const signupwitheamilandpassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    return <FirebaseContext.Provider value={{ signupwitheamilandpassword, getUser }}>{props.children} </FirebaseContext.Provider>
}