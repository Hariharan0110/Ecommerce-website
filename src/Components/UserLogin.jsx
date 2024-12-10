import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/AdminLogin.css'


const UserLogin = () => {
   let [username,setusername]=useState("");
   let [password,setpassword]=useState("");
   // console.log(username);
   // console.log(password);
   let [User,setUser]=useState([])
   useEffect(()=>{
      async function userdata(){
         let data=await fetch('http://localhost:1000/User')
         let info=await data.json();
         setUser(info);
            }
            userdata();
   },[])
   // console.log(User)

   let navigate = useNavigate()

   function login(){
      const userdata=User.find((e)=>e.email===username&&e.password===password)
      console.log(userdata)
if(userdata){
   alert("Successfully Logged In")
   navigate("/userhome")
}
else{
   alert("invalid user or password")
}
   }
    return ( 
        <div className="Adminloginbd">
        <div className="Adminlogin">
         <div className="logo" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQyIkXK3SnlaJyuZxrtglLTU3aNLyIFcrA28U6Vhu79FqyQZ0" alt="" />
         </div>
         <div className="adform">
          <h1>UserLogin</h1>
               <form action="">
                  <label htmlFor="">UserName</label>
                  <input placeholder="Enter your user name" value={username}  onChange={(e)=>{setusername(e.target.value)}} type="text" required/>
                  <label htmlFor="">Password</label>
                  <input placeholder="Enter your user password"  value={password} onChange={(e)=>{setpassword(e.target.value)}} type="text" required/>
                  <button id="bt1" onClick={login}>Login</button>
                
                  <a id="ftp"href="">ForgetPasssword</a>
                  <Link id="CYA" to="/usersignup">Create your Account </Link>


               </form>
            
               </div>
        </div>
        </div>
     );
}
 
export default UserLogin;