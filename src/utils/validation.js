const Joi = require('joi');

function validateCustomer(customer) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    address: Joi.string().min(10).max(255).required(),
    gender: Joi.string().valid('male', 'female', 'other')
  });
  return schema.validate(customer);
}

module.exports = {
  validateCustomer
};
