import Sidebar from "./Sidebar/Sidebar";
import "./styles.css";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AdminHome from "./AdminHome/AdminHome";
import UserSignup from "./UserSignup/UserSignup";
import UserLogin from "./UserLogin/UserLogin";
import Userhome from "./Userhome/Userhome";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ResetPassword from "./ResetPassword/ResetPasssword";
export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
         <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path='/admin-home' element={<AdminHome />} />
        <Route path='/user-signup' element={<UserSignup />} />
        <Route path='/user-login' element={<UserLogin />} />
        <Route path='/user-home' element={<Userhome />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:token' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}
