const mysql = require('mysql');
require('dotenv').config();

// untuk konfigurasi koneksi
const koneksi = mysql.createConnection({
    host: "bybjbd0by6pim2odaelx-mysql.services.clever-cloud.com",
    user: "uhi4fuacjcry1edq",
    password: "aEclkt1dH8w2yRGfSdR5",
    database: "bybjbd0by6pim2odaelx",
    port: "3306",
    multipleStatements: true
});

// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('SERVER SEDANG BERJALAN.....');
    console.log("localhost:3000");
});

module.exports = koneksi;