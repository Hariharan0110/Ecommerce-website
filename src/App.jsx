import AdminLogin from "./Components/AdminLogin";
import Landing from "./Components/Landing";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin";
import  AdminSignUp  from "./Components/AdminSignUp";
import AdminHomePage from "./Components/AdminHomePage";
import UserHomePage from "./Components/UserHomePage"
import Error from './Components/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSignUp from "./Components/UserSignUp";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return ( 
    <div className="app">

  <BrowserRouter>
  <Routes>
    <Route path="/*" element={<Error/>} />
    <Route path="/" element={<Landing/>}/>
    <Route path="/adminlogin" element={<AdminLogin/>}/>
    <Route path="/userlogin" element={<UserLogin/>}/>
    <Route path="/adminsignup" element={<AdminSignUp/>}/>
    <Route path="/adminhome/*" element={<AdminHomePage/>}/>
    <Route path="/userhome/*" element={<UserHomePage/>}/>
    <Route path="/usersignup" element={<UserSignUp/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer />
    </div> 
  );
}
 
export default App;