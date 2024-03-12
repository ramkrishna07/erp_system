import React,{useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {mockOrders} from '../data/mockData'
import './OrderCalendar.css';
import Navbar from './Navbar';
const OrderCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

  // Filter orders based on selected date
  const filteredOrders = mockOrders.filter(order => {
    const orderDate = new Date(order.expectedDeliveryDate);
    return (
      orderDate.getDate() === selectedDate.getDate() &&
      orderDate.getMonth() === selectedDate.getMonth() &&
      orderDate.getFullYear() === selectedDate.getFullYear()
    );
  });

  // Function to handle date change
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  // Function to mark dates with orders
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const ordersForDate = mockOrders.filter(order => {
        const orderDate = new Date(order.expectedDeliveryDate);
        return (
          orderDate.getDate() === date.getDate() &&
          orderDate.getMonth() === date.getMonth() &&
          orderDate.getFullYear() === date.getFullYear()
        );
      });

      if (ordersForDate.length > 0) {
        return <div className="order-indicator" />;
      }
    }
    return null;
  };

  return (
    <div className='orders-calendar-container'>
      <Navbar/>
    <div className="orders-calendar">
      {/* <h1 className="calendar-title">Orders Calendar View</h1> */}
      <div className="calendar-wrapper">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="custom-calendar"
          tileContent={tileContent}
        />
      </div>
      <div className="orders-list">
        <h2 className="orders-title">Orders for {selectedDate.toDateString()}:</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id}>
                <td>{order.orderId}</td>
                <td>{order.customerName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default OrderCalendar