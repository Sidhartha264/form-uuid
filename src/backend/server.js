require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./model/formmodel')
const mongoose  = require('mongoose');

app.use(cors());
app.use(express.json()); // Middleware to parse JSON data

mongoose.connect(process.env.MONGO_DB_KEY)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Route to handle form submissions
app.post('/submit', async (req, res) => {
    const { name, email } = req.body;

    try {
        const formSubmission = await User.create({
            name,
            email
        })
        res.json(formSubmission);
        console.log()
        
    } catch(error) {
        res.status(400).json(error);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});