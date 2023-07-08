import React from 'react';


const ProductList = ({ products }) => {
    
  const listItems = products.map((product, index) => {
    return <li key={index}>{product.title}: £{product.price}</li>
  })

  return (
    <div>
      <h4>Products</h4>
      <ul>
        { listItems }
      </ul>
    </div>
  )
};


export default ProductList;