const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/api/customers', customerController.getListOfCustomers)
router.post('/api/customers/create', customerController.createCustomer)

// GET /api/customers/:id
router.get('/api/customers/:id', customerController.getCustomer);

// PUT /api/customers/:id
router.put('/api/customers/:id', customerController.updateCustomer);

module.exports = router;
