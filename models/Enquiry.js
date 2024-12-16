const mongoose = require('mongoose');

// Helper to format date and time
const getFormattedDateTime = () => {
  const now = new Date();
  return now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }); // Adjust for your timezone
};

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // Validates a 10-digit mobile number
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: String, // Storing as string for formatted date and time
    default: getFormattedDateTime, // Call the formatting function
  },
});

module.exports = mongoose.model('Enquiry', enquirySchema);
