import {Link} from 'react-router-dom'
import React from 'react';
import '../styles/LandingPage.css'
const Landing = () => {
    return ( 
      <div className="landmain">
       <div className="Land">
        <div className="one">
        <Link to={"/adminlogin"}>
        <h1>AdminLogin</h1>
        <img id="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLx8rNdAmSRC3nJh5gwYdsURMu-DcWUn81UFJjlmLafs6yKUxK6rDpzMRmYp5A3azK98&usqp=CAU" alt="" />
    

        </Link>
        </div>
        <div className="two">
         
        <Link to={"/userlogin"}>
        <h1>UserLogin</h1>
        <img  id="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcpZtS76Z240-eZOBcm1PRiGh1siQFD4fLQ&s" alt="" />
        </Link>

        </div>
        </div>
        </div>
        
     );
}
 
export default Landing;
// npx json-server --watch ./Data/info.json --port 5000
