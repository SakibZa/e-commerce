const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
    unique: true
  },
  address: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 255
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
