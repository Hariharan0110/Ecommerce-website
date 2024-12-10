import axios from 'axios';
import '../styles/AdminAddproducts.css'
import { useState } from 'react';
import { toast } from 'react-toastify';



const UserAddProducts = () => {
    let[category,setCategory]=useState("")
    let[productname,setProductName]=useState("");
    let[price,setPrice]=useState("");
    let[desc,setDesc]=useState("");
    let[thum,setThum]=useState("")
    let[rating,setRating] = useState("")
     
    const Data={category,productname,price,desc,thum,rating}

    let useraddproducts=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:1000/UserProducts',Data)
        .then(res=>{
            toast.success("product succesfully added")
            console.log(Data);
        })
        .catch(rej => {
            console.log(rej)
            toast.error('Retry')
            
        })
    }

console.log(Data)

    return ( 

        <div className="useraddproducts">
         
           
            <form action="" onSubmit={useraddproducts} className="useraddproducts-form">  
        
           
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
            <input type="text" name="" id="productname" value={productname} placeholder="Enter product name" onChange={e=>{setProductName(e.target.value)}} required />
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
 
export default UserAddProducts;