const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const  errorHandler  = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const teamRoutes = require('./routes/teamRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Debugging logs
//console.log('authRoutes:', authRoutes); // Should log a function or object
app.use('/api/auth', authRoutes);

//console.log('projectRoutes:', projectRoutes); // Should log a function or object
app.use('/api/projects', projectRoutes);

//console.log('taskRoutes:', taskRoutes); // Should log a function or object
app.use('/api/tasks', taskRoutes);

//console.log('userRoutes:', userRoutes); // Should log a function or object
app.use('/api/users', userRoutes);

//console.log('teamRoutes:', teamRoutes); // Should log a function or object
app.use('/api/teams', teamRoutes);

//console.log('errorHandler:', errorHandler); // Should log a function
app.use(errorHandler);


// Log the environment
console.log(`Running in ${process.env.NODE_ENV} mode`);


// Export the app for use in server.js
module.exports = app;