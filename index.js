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
var pg = require('pg');

pg.connect(process.env.DATABASE_URL, function(err, client, done) {
  client.query('SELECT * FROM login_details', function(err, result) {
    done();
    if(err) return console.error(err);
    console.log(result.rows);
  });
});