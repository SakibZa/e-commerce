const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
require('./db/dbConn');
const customerRoutes = require('./routes/customerRoutes');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Middleware to parse incoming requests as JSON
app.use(express.json());

// Routes
app.use(customerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app

