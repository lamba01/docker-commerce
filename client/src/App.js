import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import Fetch from './fetch';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>React + GraphQL Project</h1>
        <h2>learn react</h2>
        <Fetch />
      </div>
    </ApolloProvider>
  );
}

export default App;
