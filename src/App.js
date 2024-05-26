import logo from './logo.svg';
import './App.css';
import Login from "./Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from './Logout/Logout';
import Sysadmin from "./SysAdmin/Sysadmin";
import Staff from "./Staff/Staff";
import User from "./User/User"; // Import the Logout component

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/sysadmin" element={<Sysadmin />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
