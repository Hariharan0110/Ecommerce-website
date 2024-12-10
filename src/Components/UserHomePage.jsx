import React from 'react';
import {Routes,Route} from 'react-router-dom';
import UserAddProducts from './UserAddProducts';
import UserViewItems from './UserViewItems';
import UserNavbar from './UserNavbar';
import UserUpdateProducts from './UserUpdateProducts';


export default function UserHomePage(){
    return(
        <div className="UserHomePage">
            <UserNavbar />
            <div>
                <Routes>
                    <Route path="/useraddproducts" element={<UserAddProducts />} />
                    <Route path="/userviewitems" element={<UserViewItems />}/>
                    <Route path="/userupdateproducts/:id" element={<UserUpdateProducts />} />
                </Routes>
            </div>
            
        </div>
    )
}