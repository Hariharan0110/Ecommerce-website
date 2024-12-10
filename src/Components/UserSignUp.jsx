import React from 'react';
import { useState,useEffect } from 'react';
import '../styles/UserSignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserSignUp = () => {
    let [name,setName]=useState('')
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let [phone,setPhone]=useState('')
    
    let data={name,email,password,phone}

    console.log(data)

    let navigate=useNavigate();
    let [User,setUser]=useState([])

   useEffect(()=>{
      async function userdata(){
         let data=await fetch('http://localhost:1000/User')
         let info=await data.json();
         setUser(info);
            }
            userdata();
   },[])

    function updateUser(){
        const duplicate = User.some((ele)=>ele.email===email || ele.phone===phone)

        if(duplicate){
            alert('user already exists')
        }
        else{
        axios.post('http://localhost:1000/User',data)
        .then((res)=>{
            alert('User succesfully created')
            navigate('/userlogin')
        })
        .catch((err)=>{
            alert('retry')
            console.log(err)
        })}
    }
    
return(
    <div className="bodyform">
  <div className="signup-form">
  <form  onSubmit={updateUser}>
    <label htmlFor="">Name:</label>
    <input type="text" id="name"  value={name} onChange={(e)=>{setName(e.target.value)}}required />

    <label htmlFor="">Email:</label>
    <input type="email" id="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}}required />

    <label htmlFor="">Password:</label>
    <input type="password" id="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} required />

    <label htmlFor="phone">Phone:</label>
    <input 
      type="tel" 
      id="phone"  
      required 
      pattern="[0-9]{10}" 
      title="Please enter a valid 10-digit phone number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} 
    />

    <button>Sign Up</button>
  </form></div>
  </div>
 
)
};

export default UserSignUp;
