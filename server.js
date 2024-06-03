    const express = require('express');
    const dotenv = require('dotenv');
    const connectDB = require('./config/db');
    const cors = require('cors');
    const session = require('express-session');
    const jwt = require('jsonwebtoken');
    const authMiddleware = require('./middleware/authMiddleware');
    const passport = require('passport');
    require('dotenv').config();

    require('./config/passport'); 

    dotenv.config();

    const app = express();
    app.use(cors());
                
        connectDB();
        app.use(express.json({ extended: false }));
        app.use(session({
            secret: 'fRwD8ZcX#k5H*J!yN&2G@pQbS9v6E$tA', // Replace with your secret
            resave: false,
            saveUninitialized: true,
        }));

        app.use(passport.initialize());
        app.use(passport.session());
        console.log('Passport middleware initialized');

        // Define Routes
        app.use('/api/auth', require('./routes/authRoutes'));
        app.use('/api/events', require('./routes/eventRoutes'));
        app.use('/api/google-calendar', require('./routes/googleCalendarRoutes'));

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
