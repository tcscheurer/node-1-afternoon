const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000;

var app = express();
app.use(bodyParser.json())
require('./routes')(app);

app.use(express.static('../public/build'));

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});