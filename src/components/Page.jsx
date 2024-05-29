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
	console.log(styles.page);
	return <div className={styles.page}>Welcome {name}</div>;
}

export default Page;
