import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import Login from "./Component/Login";
import Register from "./Component/Register";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
      </Routes>
  );
}

export default App;
