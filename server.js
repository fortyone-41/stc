const express = require('express');
const cors = require('cors');

const app = express();
const server = require('http').Server(app)
const mysql = require('mysql2')

app.use(express.json());
app.use(cors())

app.get('/data', (req, res) => {   
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "stk",
    password: "password",
    port: "3307"
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