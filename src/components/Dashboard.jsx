import React from 'react'
import "./Dashboard.css";
import { data } from '../data/mockData';
import LineChart from './LineChart';
import Navbar from './Navbar';
import './Navbar.css';
import MessageIcon from '@mui/icons-material/Message';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NavigationIcon from '@mui/icons-material/Navigation';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const theme = createTheme({
  palette: {
    green:{
      main:'#1ed329',
    },
    red:{
      main:'#d31e5b',
    },
    white: {
      main: '#FFFFFF',
    },
  },
});
const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className='container'>
    {/* <div className='navbar-container'> */}
        <Navbar/>
    {/* </div> */}
    <div className='dashboard'>
      {/* <h3>welcome to dashboard</h3> */}
      
     
      <div className='top'>
        <div className='poster'>
          <div className='poster-heading'>
            <h2>hello, Ramkrishna Saha</h2>
          </div>
          <div className='poster-desc'>
            <p>here is your review summary</p>
          </div>
          <div className='poster-badge'>
            <div className='poster-badge-item'>
              <div className='poster-badge-icon' style={{backgroundColor:'#d31ec8'}}>
                <MessageIcon color='white' fontSize='small'/>
              </div>
              <div className='poster-badge-content'>

              <div className='poster-badge-desc'>
                new request
              </div>
              <div className='poster-badge-count'>
                12
              </div>
              </div>
            </div>
            <div className='poster-badge-item'>
              <div className='poster-badge-icon' style={{backgroundColor:'#d31e5b'}}>
                <NotificationAddIcon color='white' fontSize='small'/>
              </div>
              <div className='poster-badge-content'>
              <div className='poster-badge-desc'>
                notification
              </div>
              <div className='poster-badge-count'>
                25
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className='transaction'>
          <div className='transaction-heading'>
            <p>recent transaction</p>
          </div>
          {data.map((transaction,i)=>(
          <div key={`${transaction.id}-${i}`} className='transaction-list'>
            <div className='transaction-img'>
              <img src={transaction.image} alt="ram"/>
            </div>
            
              <div className='transaction-details'>
                <div className='transaction-name'>
                  <p>{transaction.name}</p>
                </div>
                <div className='transaction-id'>
                  <p>{transaction.id}</p>
                </div>
                <div className='transaction-date'>
                  <p>{transaction.date}</p>
                </div>
            </div>
            
            
          </div>
          ))}
          {/* <div className='transaction-more'>
            <p>view all</p>
            <button>arrow</button>
          </div> */}
        </div>
        <div className='tabs'>
          <div className='users'>
            <div className='user-icon'>
              <PersonIcon color='white'/>
            </div>
            <div>
              <div>
                <p>total user</p>
              </div>
              <div>
                <h2>19MTR</h2>
              </div>
            </div>
          </div>
          <div className='order'>
            <div className='order-icon'>
              <LocalShippingIcon color='white'/>
            </div>
            <div>
              <div>
                <p>total order</p>
              </div>
              <div>
                <h2>378MTR</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='summary'>
          <div>
            <h2>summary</h2>
          </div>
          <div>
            <h1>7642</h1>
          </div>
          <div className='summary-growth'>
            <div className='summary-growth-icon'>
              <NavigationIcon color='green'/>
            </div>
            <div className='summary-growth-desc'>
              <p>you have a 25% growth in comp</p>
            </div>
          </div>
          <div className='summary-target'>
            <div className='summary-target-icon'>
              <CheckCircleIcon color='red'/>
            </div>
            <div className='summary-target-desc'>
              <p>your target for this month</p>
            </div>
          </div>
        </div>
        <div className='graph'>
          <LineChart/>
        </div>
      </div>
       {/* <Link to="/products">Products Management</Link>
       <Link to="/orders">Orders Management</Link> */}
  </div>
  </div>
  </ThemeProvider>
  )
}

export default Dashboard