import { useState } from "react";
import styles from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignInBtnactive, setIsSignInBtnactive] = useState(false);

  const navigate = useNavigate();

  function handleSignInButtion() {
    setIsSignInBtnactive(true);
    navigate("/page");
  }

  function signIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => console.log(userCredentials))
      .catch((e) => console.log(e));
  }

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h1>Sign In</h1>
        <form onSubmit={signIn}>
          <div className={styles.inputGroup}>
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
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink
              to="/page"
              type="submit"
              className={!isSignInBtnactive ? styles.disable : ""}
              onClick={handleSignInButtion}
            >
              Sign In
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
