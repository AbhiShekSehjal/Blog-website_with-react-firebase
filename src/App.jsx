import React from 'react'
// import { getDatabase, ref, set } from "firebase/database";
// import { app } from '../firebase';
import SignUpUser from './pages/SignUpUser';
import SignInUser from './pages/SignInUser';
import Home from './components/Home';
// import { useFirebase } from './context/firebase';


// const db = getDatabase(app);


function App() {

  // console.log(useFirebase);
  

  // const getData = () => {
  //   set(ref(db, "users/abhi"), {
  //     id: 1,
  //     name: "abhishek",
  //     skills: "MERN",
  //     salary: 100000,
  //   })
  // }

  return (
    <div>
      {/* <SignUpUser />
      <SignInUser /> */}
      <Home />
    </div>
  )
}

export default App
