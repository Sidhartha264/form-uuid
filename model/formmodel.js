const mongoose = require('mongoose');

// Define the schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// Create the model
const User = mongoose.model('User', UserSchema);

// Export the model
module.exports = User;
