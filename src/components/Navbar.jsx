import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaidIcon from '@mui/icons-material/Paid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navbar-left'>
      <ul>
       <Link to="../"><li><DashboardIcon/><span>Home</span></li></Link>
        <Link to="../products"><li><InventoryIcon/><span>Products</span></li></Link>
        <Link to="../orders"><li><PaidIcon/><span>Orders</span></li></Link>
        <Link to="../calendar"><li><CalendarMonthIcon/><span>Calendar</span></li></Link>
      </ul>
    </div>
    <div className='navbar-right'>
      <ul>
        {/* <li>search</li>
        <li>notification</li>
        <li>settings</li> */}
      </ul>
    </div>
  </div>
  )
}

export default Navbar