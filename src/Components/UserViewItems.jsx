import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/AdminViewItems.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';



export default function UserViewItems(){
    let [product, setProduct] = useState([])
    let [force, setForce] = useState(0)


    useEffect(()=> {
        function fetchData(){
            axios.get('http://localhost:1000/UserProducts')
            .then((res)=> {
                setProduct(res.data)
            })
            .catch((err)=> {
                console.log(err);
            })
        }
        fetchData()
    },[force])
    

    function deleteProduct(id,productname){
        axios.delete(`http://localhost:1000/UserProducts/${id}`)
        .then(()=> {
            toast.success(`${productname} Deleted Successfully`)
            setForce(force++)
        })
        .catch((error)=> {
            toast.error(`Data Not Found`)
            console.log(error)
        })
    }

    let navigate = useNavigate()
    function editPage(id){
        navigate(`/userhome/userupdateproducts/${id}`)
    }

    return (
        <div className="AdminViewItems">
            {product.map((product) => {
                return(
                    <div className="sub_items">
                        <div className="card1">
                            <div className="thumbnail">
                                <img src={product.thum} alt="" />
                            </div>
                            <div className="descriptions">
                                <h3>{product.productname}</h3>
                                <span id='cost'>M.R.P : <big><strike>{product.price}</strike></big></span>
                                <h5>Offer Price : 12% off $ {Math.round(product.price * 0.88)}</h5>
                                <p>Description : {product.desc}</p>
                                <span>Ratings : <b>{product.rating}*</b></span>
                                <br />
                                <button type = "button" onClick={()=> {editPage(product.id)}} className = 'btn btn-outline-warning'><EditIcon />Update</button>
                                <button type = "button"  onClick={()=> {deleteProduct(product.id,product.productname)}} className = 'btn btn-danger'><DeleteForeverIcon />Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}