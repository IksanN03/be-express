const mysql = require('mysql');
require('dotenv').config();

// untuk konfigurasi koneksi
const koneksi = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
    multipleStatements: true
});

// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('SERVER SEDANG BERJALAN.....');
    console.log("localhost:3000");
});

module.exports = koneksi;