import React from 'react'
import { useSelector } from 'react-redux'

function Dashboard() {
  const stock = useSelector(state=>state.stock.ownedStocks);

  return (
    <div className='dashboard'>
      <div className="head">
        <div className='head-item'><h2>Dashboard</h2></div>
        <div>
          <h2 className='head-item'>Money : $1000</h2>
        </div>
      </div>
        <div className='items'>
        {stock.map((stock,key)=>(
          <div key={key} className='item'>
            <h2>{stock.name}</h2>
            <h2>{stock.price}</h2>
            <h2>{stock.quantity}</h2>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Dashboard