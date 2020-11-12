const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
require('dotenv').config()
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

const Users = require('./routes/Users');

app.use('/users', Users);

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});
