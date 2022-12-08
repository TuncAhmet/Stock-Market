import { useState } from 'react'
import StockMarket from './pages/StockMarket'
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { Routes , Route, NavLink  } from "react-router-dom";

function App() {
  return (
    <div className='app'>
          <header>
      <nav>
        <ul>
          <li>
          <NavLink  to="/" style={{ padding: 5 }}>Home</NavLink >
          </li>
          <li>
          <NavLink  to="/stocks" style={{ padding: 5 }}>Stocks</NavLink >
          </li>
          <li>
          <NavLink  to="/dashboard" style={{ padding: 5 }}>Portfolio</NavLink >
          </li>
        </ul>
      </nav>
    </header>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<StockMarket />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </div>
  )
}

export default App
