import React from 'react';

import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.33'},
    {name: 'Illustrator', price: '$09.33'},
    {name: 'PDF Reader', price: '$12.32'}
    
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name ="Rubel Nayok" Nayka="Moushumi"></Person>
        <Person name ="Munna" Nayk="Shabana"></Person>
        <Person name ="Raz Razzak" Nayka="Azmiri"></Person>
        <Person name ="Ferdous" Nayka="Azgari"></Person>
      </header>
    </div>
  );
}
function Product(props){
  const productStyle={
    boder: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '10px'
  }
  const {name, price} = props.product;
  console.log(name, price)
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy now</button>

    </div>
  )
}
function Person(props){
  const personStyle = {
    border: '2px solid red',
    margin: '20px'
  }
  console.log(props)
return (
  <div style = {personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Heroin of {props.Nayka}</h3>
  </div>
  )
}

export default App;
