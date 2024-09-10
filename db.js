
//online
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/task_management?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected to database:', 'task_management'); // Log database name
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;


//offline

// // db.js
// const mongoose = require('mongoose');

// // Replace the following URI with your MongoDB connection string
// const uri = 'mongodb://localhost:27017/taskmanagement';

// const connectDB = async () => {
//     try {
//         await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error.message);
//         process.exit(1); // Exit the process with failure
//     }
// };

// module.exports = connectDB;
