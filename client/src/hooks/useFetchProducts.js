// src/hooks/useFetchProducts.js
import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');
        const filteredProducts = response.data.filter(
          (product) => product.title.toLowerCase() !== 'new product' && product.id < 150
        );
        setProducts(filteredProducts);
      } catch (err) {
        setError('Error fetching products');
      }
    };

    fetchProducts();
  }, []);

  return { products, error };
}

export default useFetchProducts;
