const express = require('express');
const app = express();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log('its live')
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'asklls',
        size: 'large'
    })
});