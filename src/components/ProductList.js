import React from 'react';
import { Link } from 'react-router-dom';


const ProductList = ({ products }) => {
    
  const listItems = products.map((product, index) => {
    return <li key={index}><Link to={`/products/${product.id}`}>
    {product.title}</Link>: £{product.price}<button>Details</button></li>
  })

  return (
    <div>
      <h4>Product Details</h4>
      <ul>
        { listItems }  
      </ul>
      
      
    </div>
  )
};


export default ProductList;