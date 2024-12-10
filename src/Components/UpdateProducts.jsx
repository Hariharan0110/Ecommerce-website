import React, { useEffect } from 'react'
import axios from 'axios';
import '../styles/UpdateProducts.css'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';


export default function UpdateProducts() {
    let[category,setCategory]=useState("")
    let[productname,setProducrName]=useState("");
    let[price,setPrice]=useState("");
    let[desc,setDesc]=useState("");
    let[thum,setThum]=useState("")
    let[rating,setRating] = useState("")

    let data = {category,productname,price,desc,thum,rating}

    let param = useParams();

    function updateItem(e){
        e.preventDefault();
        axios.put(`http://localhost:1000/Products/${param.id}`,data)
        .then((res) => {
            console.log(res);
            toast.success("Itam Updated Successfully")
        })
        .catch((err) => {
            console.log(err)
            toast.err("Invalid Data Format")
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:1000/Products/${param.id}`)
        .then((res) => {
            let payload = res.data
            console.log(res.data)
            setCategory(payload.category)
            setProducrName(payload.productname)
            setPrice(payload.price)
            setDesc(res.data.desc)
            setThum(payload.thum)
            setRating(payload.rating)
        })
        .catch((err) => {
            console.log(err)
        })

    },[])


    return ( 

        <div className="updateproducts">
         
           
            <form action="" className="updateproducts-form" onSubmit={updateItem} >  
        
           
            <label htmlFor="">
                Category
            </label>
            <select name="" id="" value={category} onChange={(e)=>{setCategory(e.target.value)}} required>
                <option >Fashion</option>
                <option >Mobiles</option>
                <option >Electronics</option>
                <option >Tv&Appliances</option>
                <option >Furniture</option>
                <option>Grocery</option>
                <option>Vehicles</option>
            </select>
            
            <label htmlFor="productname">ProductName</label>
            <input type="text" name="" id="productname" value={productname} placeholder="Enter product name" onChange={e=>{setProducrName(e.target.value)}} required />
            
            <label htmlFor="price">Price</label>
            <input type="" id="price" value={price} placeholder="Enter Price" onChange={e=>{setPrice(e.target.value)}} required/>
            
            <label htmlFor="Desc">Desc</label>
            <textarea name="" id="Desc" rows="3" value={desc}  onChange={e=>{setDesc(e.target.value)}} required></textarea>
            
            <label htmlFor="thumnail">Thumnail</label>
            <input type="text" id='thumnail'value={thum} placeholder="Enter image url here"  onChange={e=>{setThum(e.target.value)}} required/>
            
            <label htmlFor="rating">Rating</label>
            <input type="" id='rating'value={rating} placeholder="Give ur Ratings Here"  onChange={e=>{setRating(e.target.value)}} required/>
            
            <button>Sumbit</button> 
            
            </form>
          
            
        </div>
    );
}



