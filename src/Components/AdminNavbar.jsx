import AdminDropdown from './AdminDropdown.jsx'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/AdminNavbar.css'
import fb   from '../images/fb.webp'

const AdminNavbar = () => {
    return ( 

        <div className="adminnav">
             

            <div className="logoh">
                {/* <h1>E<span>Kart</span></h1>
                 */}
                   <img id="logofb" src={fb} alt="" />
            </div>
            <div className="links">
            <Link to="/adminhome/addproducts" id='goto'>Addproducts</Link>
            <Link to="/adminhome/viewitems" id='goto'>ViewProducts</Link>
            <Link to="/adminhome/viewcart" id='goto'><ShoppingCartIcon/>cart</Link>
              
            </div>
            <div className="account">
                <AdminDropdown/>
            </div>
            
        </div>
     );
}
 
export default AdminNavbar;