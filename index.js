const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.listen(
    port,
    () => console.log('its live')
)

app.get('/', (req, res) => {
    res.send(`Hello World ${port}`);
});

// not working properly
// const Pool = require("pg").Pool;
// require("dotenv").config();
// const isProduction = process.env.NODE_ENV === "production";
// const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
// const pool = new Pool({
//     connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//     ssl: {
//         rejectUnauthorized: false,
//     },
// });
// module.exports = pool;

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? true : false
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});