const express = require('express');
const cors = require('cors');

const app = express();
const server = require('http').Server(app)
const mysql = require('mysql2')

app.use(express.json());
app.use(cors())

app.get('/data', (req, res) => {   
  const connection = mysql.createConnection({
    host: "pk1l4ihepirw9fob.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "h36iy87qw1o1etf3",
    database: "gwmnknro0kno2yef",
    password: "ch0gjtch3rtgncse",
    port: "3306"
  });
   
  connection.query("SELECT * FROM tasks",
    function(results) {
      console.log(results)
      return res.json(results);
  });
  connection.end()
});

server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Server started')
});