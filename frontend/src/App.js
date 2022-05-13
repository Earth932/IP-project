import { Routes, Route } from "react-router-dom";
import "../src/Css/App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import Register from "./Component/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
