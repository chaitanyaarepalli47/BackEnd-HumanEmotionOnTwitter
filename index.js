const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.logger());

app.listen(
    port,
    () => console.log('its live')
)

app.get('/', (req, res) => {
    res.send(`Hello World ${port}`);
});

// not working properly
const Pool = require("pg").Pool;
require("dotenv").config();
const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: {
        rejectUnauthorized: false,
    },
});
module.exports = pool;