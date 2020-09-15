import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman Khan', 'Imran Khan']
  const products = [
    {name:'Photoshop', price: '$90.90'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
    
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
          {
            products.map(pd=><Product product={pd}></Product>)
          }
        </ul>

        <Person name="Munna" job="Football"></Person>
        <Person name="Masum" job="Dorshok"></Person>
        <Person></Person>
        
      </header>
      
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  console.log(name, price)
  return(
    <div style={productStyle}>
    <h3>{name}</h3>
    <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )

}
function Person(props){
  return(
    <div style={{border: '2px solid gold', width: '400px'}}>
      <h3> My Name:{props.name}</h3>
      <p>My Profession:{props.job}</p>
    </div>
  )
}



export default App;
