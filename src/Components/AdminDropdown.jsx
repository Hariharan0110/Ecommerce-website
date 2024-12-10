import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import '../styles/AdminNavbar.css';
function AdminDropdown() {
  
  return (
    
    <Dropdown>
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
       <AccountCircleIcon/>Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item id="dropdown-down" href="#/action-1"><AccountBoxIcon/> Profile</Dropdown.Item>
        <Dropdown.Item id="dropdown-down"href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item id="dropdown-down"href="#/action-3"><LogoutIcon></LogoutIcon> Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AdminDropdown;