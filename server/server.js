const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const db = require('./db');

const app = express();

// Simple GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Root resolver
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enables the GraphiQL UI
}));

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000/graphql');
});
