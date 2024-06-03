    // eventRoutes.js
    const express = require('express');
    const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
    const protect = require('../middleware/authMiddleware'); // Import the protect function directly
    const router = express.Router();

    router.use(protect); // Use the protect function directly

    router.post('/create', createEvent);
    router.get('/', getEvents);
    router.put('/:id', updateEvent);
    router.delete('/:id', deleteEvent);

    module.exports = router;
