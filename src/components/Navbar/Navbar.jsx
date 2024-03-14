import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaidIcon from '@mui/icons-material/Paid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Navbar.css';
const theme = createTheme({
  palette: {
    blue:{
      main:"#386cd9"
    },
  },
});
const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className='navbar'>
    <div className='navbar-left'>
      <ul>
       <Link to="../"><li><DashboardIcon color='blue'/><span>Home</span></li></Link>
        <Link to="../products"><li><InventoryIcon color='blue'/><span>Products</span></li></Link>
        <Link to="../orders"><li><PaidIcon color='blue'/><span>Orders</span></li></Link>
        <Link to="../calendar"><li><CalendarMonthIcon color='blue'/><span>Calendar</span></li></Link>
        <Link to=""><li><SettingsIcon color='blue'/><span>Settings</span></li></Link>
        <Link to=""><li><NotificationsIcon color='blue'/><span>Alert</span></li></Link>
      </ul>
    </div>
  </div>
  </ThemeProvider>
  )
}

export default Navbar