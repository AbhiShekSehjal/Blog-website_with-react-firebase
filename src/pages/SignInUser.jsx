import React, { useState } from 'react'
import { app } from '../../firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

let auth = getAuth(app);

function SignInUser() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => alert("sign in : " + userCredential.user.email))
            .catch((error) => {
                console.log("error : ", error);
            })
    }

    return (
        <div>

            <h1>signin page</h1>

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={signin}>click</button>
        </div>
    )
}

export default SignInUser
