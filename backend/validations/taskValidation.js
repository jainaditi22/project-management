const Joi = require('joi');

// Validation for creating a task
const createTaskValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(10).required(),
    priority: Joi.string().valid('low', 'medium', 'high').required(),
    dueDate: Joi.date().required(),
    project: Joi.string().required(), // Project ID
  });

  return schema.validate(data);
};

// Validation for updating a task
const updateTaskValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3),
    description: Joi.string().min(10),
    status: Joi.string().valid('pending', 'in-progress', 'completed'),
    priority: Joi.string().valid('low', 'medium', 'high'),
    dueDate: Joi.date(),
  });

  return schema.validate(data);
};

module.exports = { createTaskValidation, updateTaskValidation };