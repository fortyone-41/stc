const express = require('express');
const cors = require('cors');

const app = express();
const server = require('http').Server(app)
const mysql = require('mysql2')
const corsOptions = {
  origin: '*',
  methods: ["GET", "POST"],
  allowedHeaders: ["my-custom-header"],
  credentials: true
}
app.use(express.json());
app.use(cors())

app.get('/data', cors(corsOptions), (req, res) => {   
  const connection = mysql.createConnection({
    host: "pk1l4ihepirw9fob.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "h36iy87qw1o1etf3",
    database: "gwmnknro0kno2yef",
    password: "ch0gjtch3rtgncse", 
    port: "3306"
  });
   
  connection.query("SELECT * FROM tasks",
    function(err, results) {
      console.log(results)
      return res.json(results);
  });
  connection.end()
});

server.listen(80, "https://stc-testtask.herokuapp.com", (err) => {
  if (err) {
    throw Error(err);
  }
  //console.log(app)
  console.log('Server started')
});