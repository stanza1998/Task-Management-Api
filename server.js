// server.js
const express = require('express');
const connectDB = require('./db');
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});