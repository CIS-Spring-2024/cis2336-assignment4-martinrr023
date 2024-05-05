const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Enable parsing of JSON request bodies, typically from a client POST
app.use(bodyParser.urlencoded({ extended: true }));

// Handle POST request to calculate order total
app.post('/ordeForm', (req, res) => {
    // Process the form data and calculate the total amount of the order
    let total = 0;
    for (let item in req.body) {
        total += req.body[item].price * req.body[item].quantity;
    }

    // Send the calculated total amount as the response
    res.send(`Total amount: $${total}`);
});

// Handle GET request to serve the order page
app.get('/', (req, res) => {
    // Serve order page
    res.sendFile(path.join(FrontEnd, 'public', 'order.html'));
});

// Start the server
const port = 5500;
app.listen(port, () => console.log(`Server listening on port ${port}`));
