import mysql from 'mysql';

const dbConn = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cartroute'
  }
);

dbConn.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log("Database Connected");
})

export default dbConn;