import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/products-by-category',
        params: {
          category_id: '2478868012',
          page: '1',
          country: 'US',
          sort_by: 'RELEVANCE',
          product_condition: 'ALL',
          is_prime: 'false',
          deals_and_discounts: 'NONE'
        },
        headers: {
          'x-rapidapi-key': 'f1981e9867msh0674fc8a2e4f625p1994bdjsn0e7962889853',
          'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setProducts(response.data.data.products); // Adjust according to the response structure
        console.log(response.data)
      } catch (error) {
        setError('Error fetching data: ' + error.message);
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.asin}>
            <h3>{product.product_title}</h3>
            <p>Price: {product.product_price}</p>
            <img src={product.product_photo} alt={product.product_title} width="150" />
            <p><a href={product.product_url} target="_blank" rel="noopener noreferrer">View Product</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
