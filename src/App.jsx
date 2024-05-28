import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Page from "./components/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
