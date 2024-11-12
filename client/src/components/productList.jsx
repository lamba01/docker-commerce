// src/components/ProductList.js
import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import Topnav from './Topnav';

const ProductList = () => {
  const { products, error } = useFetchProducts();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Topnav />
      <h3>Product List</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>{product.title}</h4>
            {/* <p>{product.description}</p> */}
            <img src={product.images[0]} alt={product.title} width="150"/>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
