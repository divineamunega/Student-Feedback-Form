import styles from "./Page.module.css";
import { useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function Page() {
  const [name, setName] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setName(user.displayName);
      // ...
    } else {
      // User is signed out
      console.log("Use Is signed out");
      // ...
    }
  });
  return (
    <div className={styles.page}>
      <header className={styles.header}>Welcome {name}!</header>
      <div className={styles.app}>
        <form action="">
          <input
            type="text"
            name="lecturer-name"
            id="lecturer-name"
            placeholder="Lecturer's Name"
          />
          <input
            type="text"
            name="course-code"
            id="course-code"
            placeholder="Course Code"
          />
          <input
            type="text"
            name="department"
            id="department"
            placeholder="Department"
          />
          <input type="text" name="level" id="level" placeholder="Level" />
          <textarea name="feedback" id="feedback" placeholder="Enter your Feedback"></textarea>
          <button type="submit">Send Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
