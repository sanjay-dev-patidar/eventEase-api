// controllers/googleCalendarController.js
const User = require('../models/User');
const { syncEvents } = require('../services/googleCalendarService');

exports.syncGoogleCalendar = async (req, res, token) => {
  try {
    console.log('Received token in googleCalendarController:', token); // Log the received token
    const user = await User.findById(req.user.id);
    console.log('User found in googleCalendarController:', user); // Log the user found
    const syncedEvents = await syncEvents(user, token);
    console.log('Synced events in googleCalendarController:', syncedEvents); // Log the synced events
    res.status(200).json({ message: 'Google Calendar synced successfully', syncedEvents });
  } catch (error) {
    console.error('Error syncing Google Calendar in googleCalendarController:', error); // Log the error
    res.status(500).json({ message: 'Failed to sync Google Calendar', error: error.message });
  }
};