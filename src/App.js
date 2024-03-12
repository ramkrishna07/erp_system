import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';
import OrderCalendar from './components/OrderCalendar';
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
