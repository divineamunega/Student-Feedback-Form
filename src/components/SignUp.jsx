import { useState } from "react";
import styles from "./Login.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("Sign Up");
  const [isSignUpBtnactive, setIsSignUpBtnactive] = useState(true);

  function handleSignUpButton() {
    setIsSignUpBtnactive(true);
    setTitle("Sign Up");
  }

  function signUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => console.log(userCredentials))
      .catch((e) => console.log(e));
  }

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h1>{title}</h1>
        <form onSubmit={signUp}>
          <div className={styles.inputGroup}>
            <div className={styles.inputField}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <input
                type="email"
                placeholder="Email"
                className="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <input
                type="password"
                placeholder="Password"
                className="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>
              Lost password <a href="#">Click Here!</a>
            </p>
          </div>
          <div className={styles.btnField}>
            <NavLink
              to="/"
              type="submit"
              onClick={handleSignUpButton}
              className={!isSignUpBtnactive ? styles.disable : ""}
            >
              Sign Up
            </NavLink>
            <NavLink to="/login">Sign In</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
