const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
// Connect to the MongoDB database
const uri = "mongodb+srv://sakibzaidi:Sakib%40123@cluster0.pdxnorp.mongodb.net/zaidi?retryWrites=true&w=majority";

// const mongose = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// mongoose.connect(
//     uri,
  
//    {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Error connecting to MongoDB', err));
const mongose = mongoose.connect(uri, { useNewUrlParser: true }) .then(() => console.log("MongoDB connected")) .catch((err) => console.log(err));

module.exports = mongose;