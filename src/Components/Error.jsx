import React from 'react';
import '../styles/Error.css'

export default function Error(){
    return(
        <div className="Error">
            <marquee className = "marquee" behavior = "" direction = "">
                <h1>Error 404</h1>
                <h1>Page Not Found</h1>
                <img src="https://cdn.acowebs.com/wp-content/uploads/2023/10/3acwebs-1.jpg" alt="" />
            </marquee>
        </div>
    )
}