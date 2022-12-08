import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import buyStock from '../redux/stock/stockSlice';


function Stocks() {

    const stocks = useSelector(state=>state.stock.stocks);
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(buyStock());
    }
    
  return (
    <div>
      <CardGroup className='stocks' >
      {stocks.map((stock,key)=>(
          <Card key={key} className="stock" style={{ width: '14vw' }}>
            <Card.Img variant="top" style={{width:'10rem', height:'7rem'}} src={stock.img} />
            <Card.Body>
              <Card.Title>{stock.name}</Card.Title>
              <Card.Text>
                ${stock.price}  USD
              </Card.Text>
              <Button onClick={handleClick} variant="success">Buy</Button>
              <Button variant="danger">Sell</Button>
            </Card.Body>
          </Card>
      ))}
      </CardGroup>
    </div>
  )
}

export default Stocks