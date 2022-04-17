const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();
const port = 80;

// Express specific stuff

app.use('/static', express.static('static')); // For seving static file
app.use(express.urlencoded());

// Pug specific stuff/configuration
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Endpoints
app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('index.pug', params);
})



// Start the server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
})