const express = require('express');
const cors = require('cors'); // Import cors
const connectDB = require('./db');
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS middleware
app.use(cors()); // Enable CORS for all origins

// Use the routes
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes); // Ensure this route is properly set up

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
