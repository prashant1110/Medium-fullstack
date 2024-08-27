import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "../pages/SignUp";
import Signin from "../pages/Signin";
import Blog from "../pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
