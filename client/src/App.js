import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import ProductList from './components/productList';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1 className="text-3xl font-bold underline text-yellow-400">React + GraphQL Project</h1>
        <h2>learn react</h2>
        <ProductList />
      </div>
    </ApolloProvider>
  );
}

export default App;
