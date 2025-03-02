const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
  level: 'info', // Log level
  format: winston.format.json(), // Log format
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Log errors to file
    new winston.transports.File({ filename: 'logs/combined.log' }), // Log all messages to file
  ],
});

module.exports = logger;