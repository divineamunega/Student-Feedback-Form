import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Page from "./components/Page";
import { Navigate } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<Navigate to="/signup" />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
				<Route path="/page" element={<Page />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
