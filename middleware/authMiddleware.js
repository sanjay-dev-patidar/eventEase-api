// authMiddleware.js
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/auth');
const User = require('../models/User');

const protect = async (req, res, next) => {
    const token = req.header('x-auth-token');

    console.log('Received token:', token);

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded.user;

        console.log('Decoded user:', req.user);

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Token verification error:', error);
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = protect;
    