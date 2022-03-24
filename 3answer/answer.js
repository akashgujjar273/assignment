const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "123456789",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name admin(255), email example@gmail.com(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});