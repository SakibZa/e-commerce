const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect(
  'mongodb+srv://sakibzaidi:Sakib@123@cluster0.pdxnorp.mongodb.net/e-commerce',
  
   {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

module.exports = mongoose;