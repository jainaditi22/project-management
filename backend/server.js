const app = require('./app');
const PORT = process.env.PORT || 5000;

console.log(`Running in ${process.env.NODE_ENV} mode`);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});