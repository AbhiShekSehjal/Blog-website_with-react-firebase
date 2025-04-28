import React, { useState } from 'react'
import { app } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

let auth = getAuth(app);

function SignUpUser() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => alert("done : " + userCredential.user.email))
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <div>

            <h1>signUp page</h1>

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={createUser}>click</button>
        </div>
    )
}

export default SignUpUser;
