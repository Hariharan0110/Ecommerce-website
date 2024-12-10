import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import '../styles/AdminLogin.css'
const AdminLogin = () => {
   let [username,setusername]=useState("");
   let [password,setpassword]=useState("");  

   
   let [Admin,setAdmin]=useState([]);

useEffect(()=>{
   async function fetchAdmin(){
      let data= await fetch('http://localhost:1000/Admin');
      let res= await data.json();
      
      setAdmin(res)
   }
   fetchAdmin();
},[])

console.log(Admin)
   
   let navigate= useNavigate();

   function login(){
     
     let val = Admin.filter((e)=>
      { return e.email === username && e.password === password})
   // const Admindata=Admin.find((ele)=>ele.email===username&&ele.password===password)
   // console.log(Admindata)
      if(val.length>0){
         alert("SUCCESFUL")
         navigate('/adminhome')
      }
      else{
         alert("NOT SUCCESFUL")
      }
   }
    return ( 
     <div className="Adminloginbd">
        <div className="Adminlogin">
         <div className="logo" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQyIkXK3SnlaJyuZxrtglLTU3aNLyIFcrA28U6Vhu79FqyQZ0" alt="" />
         </div>
         <div className="adform">
            <div className="hea"></div>
          <h1>AdminLogin</h1>
               <form action="">
                  <label htmlFor="">UserMail</label>
                  <input placeholder="Enter your Mail id" value={username}  onChange={(e)=>{setusername(e.target.value)}}  type="text" required/>
                  <label htmlFor="">Password</label>
                  <input placeholder="Enter your user password"  value={password} onChange={(e)=>{setpassword(e.target.value)}} type="text" required/>
                  
                  <button id="bt1" onClick={login}>Login</button>
                
                  <a id="ftp"href="">ForgetPasssword</a>
                  <Link id="CYA" to="/adminsignup">Create your Account </Link>
               

               </form>
            
               </div>
        </div>
        </div>
     );
}
 
export default AdminLogin;