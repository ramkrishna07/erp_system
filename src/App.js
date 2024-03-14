import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/Product/Products';
import Orders from './components/Order/Orders';
import OrderCalendar from './components/Calendar/OrderCalendar';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/calendar" element={<OrderCalendar/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
