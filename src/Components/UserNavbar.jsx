import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
  return (
    <div>
      <Link to="/userhome/useraddproducts" id='goto'>Addproducts</Link>
      <Link to="/userhome/userviewitems" id='goto'>ViewProducts</Link>
    </div>
  )
}

export default UserNavbar
