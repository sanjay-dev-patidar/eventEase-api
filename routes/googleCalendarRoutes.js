// routes/googleCalendarRoutes.js
const express = require('express');
const { syncGoogleCalendar } = require('../controllers/googleCalendarController');
const protect = require('../middleware/authMiddleware'); 
const router = express.Router();

router.use(protect); // Use the protect middleware to ensure authentication

router.post('/sync', async (req, res) => {
  console.log('Received request in googleCalendarRoutes'); // Log the received request
  try {
    // Get the token from the request headers
    const token = req.header('x-auth-token');
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    await syncGoogleCalendar(req, res, token); // Call the syncGoogleCalendar function with the token
  } catch (error) {
    console.error('Error syncing Google Calendar:', error);
    res.status(500).json({ message: 'Failed to sync Google Calendar', error: error.message });
  }
});

module.exports = router;
