import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { useState } from "react";

const Web = () => {
  const [user, setUser] = useState(null);

  const githubProvider = new GithubAuthProvider();

  const handleGithubLogin = () => {
    console.log("check github login");
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  const handleGithubLogout = () => {
    console.log("github logout checked");
    signOut(auth)
      .then(() => {
        console.log("sign out done");
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
      <h1>Github log in and out</h1>
      <div style={flexStyle}>
        <button onClick={handleGithubLogin} style={btnStyle}>
          Login with github
        </button>
        <button onClick={handleGithubLogout} style={btnStyle2}>
          Logout from github
        </button>
      </div>
      <br />
      <br />
      {user && (
        <div className="">
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};

export default Web;
