const Joi = require('joi');

// Validation for creating a project
const createProjectValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(10).required(),
    deadline: Joi.date().required(),
  });

  return schema.validate(data);
};

// Validation for updating a project
const updateProjectValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3),
    description: Joi.string().min(10),
    status: Joi.string().valid('pending', 'in-progress', 'completed'),
    deadline: Joi.date(),
  });

  return schema.validate(data);
};

module.exports = { createProjectValidation, updateProjectValidation };