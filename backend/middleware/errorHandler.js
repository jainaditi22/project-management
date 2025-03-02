const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Default error message and status code
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    const message = err.message || 'Internal Server Error';
  
    res.status(statusCode).json({
      message,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
  };
  
  module.exports = errorHandler;