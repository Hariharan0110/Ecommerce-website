import '../styles/AdminFooter.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const AdminFooter = () => {
    return (
        <footer class="footer">
        <div className="content">
            <div class="footer-section contact">
                <h2>Contact Us</h2>
                <p>Email: support@example.com</p>
                <p>Phone: +1 234 567 890</p>
                <p>Address: 123 E-commerce St, City, Country</p>
            </div>
          
            <div class="footer-section social">
                <h2>Follow Us</h2>
                <ul>
                    <li><span><FacebookIcon/></span><a href="https://facebook.com" target="_blank">Facebook</a></li>
                    <li><span><XIcon /></span><a href="https://twitter.com" target="_blank">Twitter</a></li>
                    <li><span><InstagramIcon/></span><a href="https://instagram.com" target="_blank">Instagram</a></li>
                    <li><span><YouTubeIcon/></span><a href="https://youtube.com" target="_blank">YouTube</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Find&Buy. All Rights Reserved.</p>
        </div>
    </footer>
      );

}
 
export default AdminFooter;