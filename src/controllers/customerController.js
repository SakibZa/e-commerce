const Customer = require('../models/customerModel');
const { validateCustomer } = require('../utils/validation');
const mongoose = require('mongoose');


async function getListOfCustomers(req, res, next) {
    try {
        const customer = await Customer.find({});
        res.send(customer);
    } catch (error) {
        next(error);
    }
}

// POST /api/customers/create
async function createCustomer(req, res, next) {
    try {
        const { error } = validateCustomer(req.body);
        if (error) {
        return res.status(400).send(error.details[0].message);
        }
        const customer = new Customer(req.body);
        customer.save()
        res.send(customer);
    } catch (error) {
        next(error);
    }
}

// GET /api/customers/:id
async function getCustomer(req, res, next) {
  try {
    if(mongoose.Types.ObjectId.isValid(req.params.id)) {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({"error":"Customer not found", "code":404, "status":"failure"});
        }
        return res.send(customer);
    }
    return res.status(404).json({"error":"Customer not found", "code":404, "status":"failure"});
  } catch (error) {
    next(error);
  }
}

// PUT /api/customers/:id
async function updateCustomer(req, res, next) {
    try {
        const { error } = validateCustomer(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        if(mongoose.Types.ObjectId.isValid(req.params.id)) {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!customer) {
                return res.status(404).json({"error":"Customer not found", "code":404, "status":"failure"});
            }
            return res.json({"status":"Success", "code":200, "message":"Customer Details Updated", "customer_id":customer._id});
        }
        return res.status(404).json({"error":"Customer not found", "code":404, "status":"failure"});
    } catch (error) {
        next(error);
    }
}
    
module.exports = {
    getListOfCustomers,
    createCustomer,
    getCustomer,
    updateCustomer
};