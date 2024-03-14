import React from 'react'
import "./Dashboard.css";
import { data } from '../../data/mockData';
import LineChart from '../LineChart';
import Navbar from '../Navbar/Navbar';
import MessageIcon from '@mui/icons-material/Message';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
        <Navbar/>
    <div className='dashboard'>
      
     
      <div className='top'>
        <div className='poster'>
          <div className='poster-heading'>
            <h2>Hello, Ramkrishna Saha</h2>
          </div>
          <div className='poster-desc'>
            <p>Here is your review summary</p>
          </div>
          <div className='poster-badge'>
            <div className='poster-badge-item'>
              <div className='poster-badge-icon' style={{backgroundColor:'#d31ec8'}}>
                <MessageIcon color='white' fontSize='small'/>
              </div>
              <div className='poster-badge-content'>

              <div className='poster-badge-desc'>
                New request
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
                Notification
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
            <p>New requests</p>
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
                  {
                    transaction.priority=='High Priority'?
                    <div className='transaction-date'
                    style={{border:"1px solid #d31e5b",color:"#d31e5b",boxShadow:"inset #d31e5b 0px 0px 3px 0px"}}>
                      <p>{transaction.priority}</p>
                    </div>:
                    <div className='transaction-date'
                    style={{border:"1px solid #1ed329",color:"#1ed329",boxShadow:"inset #1ed329 0px 0px 3px 0px"}}>
                      <p>{transaction.priority}</p>
                    </div>
                  }
                  
                
            </div>
            
            
          </div>
          ))}
        </div>
        <div className='tabs'>
          <div className='users'>
            <div className='user-icon'>
              <PersonIcon color='white'/>
            </div>
            <div>
              <div>
                <p>Total User</p>
              </div>
              <div style={{display:"flex"}}>
                <h2>4.9M</h2>
                {/* <br /> */}
                <span style={{display:"flex",alignItems:"center",color:"#d31e5b",fontWeight:650,}}><ArrowDropDownIcon color='red'/><p>4%</p></span>
              </div>
            </div>
          </div>
          <div className='order'>
            <div className='order-icon'>
              <LocalShippingIcon color='white'/>
            </div>
            <div>
              <div>
                <p>Total Order</p>
              </div>
              <div style={{display:"flex"}}>
                <h2>237M</h2>
                {/* <br /> */}
                <span style={{display:"flex",alignItems:"center",color:"#5fd938",fontWeight:650,}}><ArrowDropUpIcon color='green'/><p>5.7%</p></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='summary'>
          <div>
            <h2>Summary</h2>
          </div>
          <div>
            <h1>7642</h1>
            <br />
            <p style={{fontWeight:650}}>Total delivered (last 30 days)</p>
          </div>
          <div className='summary-growth'>
            <div className='summary-growth-icon'>
              <ArrowDropUpIcon color='green'/>
            </div>
            <div className='summary-growth-desc'>
              <p>You have a <span style={{color:"#5fd938",fontWeight:650,}}>25% growth</span> in comp</p>
            </div>
          </div>
          <div className='summary-target'>
            <div className='summary-target-icon'>
              <CheckCircleIcon color='red'/>
            </div>
            <div className='summary-target-desc'>
              <p>Your target for this month</p>
            </div>
          </div>
        </div>
        <div className='graph'>
          <LineChart/>
        </div>
      </div>
  </div>
  </div>
  </ThemeProvider>
  )
}

export default Dashboard