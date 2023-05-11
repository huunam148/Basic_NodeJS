// get the client
// const mysql = require('mysql2');
import mysql from 'mysql2'

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'database1'
});

// simple query
// connection.query(
//   'SELECT * FROM `users` ',

//   function(err, results, fields) {
//     console.log('check query ok');
//     console.log(results); 
//   }
// );

export default connection;