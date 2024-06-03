const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'] 
    },
    googleId: {
        type: String,
        unique: true
      },
    resetPasswordToken: String,
 
    resetPasswordExpires: Date,
    
    googleAccessToken: {
        type: String,
      },
      googleRefreshToken: {
        type: String,
      },
    date: {
        type: Date,
        default: Date.now
    },
  
  


});

module.exports = mongoose.model('User', userSchema);