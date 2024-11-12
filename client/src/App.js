import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import client from './ApolloClient';
import ProductList from './components/productList';
import Login from './components/auth/login';
import Signup from './components/auth/signup';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1 className="text-3xl font-bold underline text-yellow-400">React + GraphQL Project</h1>
        <h2>learn react</h2>
      </div>
      <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;
