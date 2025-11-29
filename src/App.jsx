import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const handleGoogleSignUp = () => {
    // console.log("check goole sign in");
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  const handleGoogleSignOut = () => {
    console.log("check google sign out");
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const btnStyle = {
    backgroundColor: "green",
    padding: "5px",
  };

  const btnStyle2 = {
    backgroundColor: "red",
    padding: "5px",
  };

  const flexStyle = {
    display: "flex",
    gap: "10px",
  };

  return (
    <>
      <h1>Hello From App</h1>
      <h1>simple sign in and out</h1>
      <div style={flexStyle}>
        <button onClick={handleGoogleSignUp} style={btnStyle}>
          Sign Up With Google
        </button>

        <button onClick={handleGoogleSignOut} style={btnStyle2}>
          Sign Out From Google
        </button>
      </div>

      <br />
      <br />

      <h1>sign in and out with conditinal rendering</h1>
      {user ? (
        <>
          <button onClick={handleGoogleSignOut} style={btnStyle2}>
            Sign Out From Google
          </button>
        </>
      ) : (
        <>
          <button onClick={handleGoogleSignUp} style={btnStyle}>
            Sign Up With Google
          </button>
        </>
      )}

      {user && (
        <div className="">
          <p>user name : {user.displayName}</p>
          <p> user email : {user.email}</p>
          <p>user photo : </p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </>
  );
}

export default App;
