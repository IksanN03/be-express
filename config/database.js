const mysql = require('mysql');
require('dotenv').config();

// untuk konfigurasi koneksi
const koneksi = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    multipleStatements: true
});

// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('SERVER SEDANG BERJALAN.....');
    console.log("localhost:3000");
});

module.exports = koneksi;