// const mysql = require('mysql2');
// require("dotenv").config();

// const connection = mysql.createConnection({
//   host: process.env.host,
//   user: process.env.user,
//   password: process.env.password,
//   database: process.env.database,
//   port: process.env.port
// });

// connection.connect(err => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL');
// });


const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.query("SELECT 1", (error, results, fields) => {
  if (error) {
    console.error("Error connecting to aiven:", error);
    throw error;
  }
  console.log("Connected to Aiven");
  console.log("Example query result:", results);
});

// Export the connection
module.exports = connection;

