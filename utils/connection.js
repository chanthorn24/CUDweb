const mysql = require('mysql2');
require("dotenv").config();

const pool = mysql.createPool({
  host:  process.env.DB_HOST   ,
  user:   process.env.DB_USER  ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME ,
});

const connect = pool.promise();


module.exports = {pool,connect};


  // //style2
  //  const [rows] = await connect.query('SELECT * FROM testtb');
  //  console.log(rows[0]);

  // //style1
  // pool.query('SELECT * FROM testtb', function(err, result) {
  //          if (err) {
  //              return console.log(err);
  //          }
  //          console.log(result);
  // })