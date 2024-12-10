import AdminAddProducts from "./AdminAddProducts";
import AdminFooter from "./AdminFooter";
import AdminNavbar from "./AdminNavbar";
import AdminViewItems from "./AdminViewItems";
import { Route,Routes} from "react-router-dom";
import UpdateProducts from './UpdateProducts'
import '../styles/AdminHome.css'

const AdminHomePage = () => {
    return ( 
        <div className="AdminHomePage">
            <AdminNavbar />
            <div className="maincontent">
                <Routes>
                    <Route path="/addproducts" element={<AdminAddProducts />} />
                    <Route path="/viewitems" element={<AdminViewItems />} />
                    <Route path="/updateproducts/:id" element={<UpdateProducts />} />
                </Routes>
            </div>    
            <AdminFooter />
        </div>

   
     );
}
 
export default AdminHomePage;