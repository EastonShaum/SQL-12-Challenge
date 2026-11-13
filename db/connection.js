const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  // Your MySQL username,
  user: process.env.DB_USER || 'root',
  // Your MySQL password
  password: process.env.DB_PASSWORD,
  database: 'employee_db'
});

module.exports = db;