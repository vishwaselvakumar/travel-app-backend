const express = require('express');
const { createEnquiry, getAllEnquiries } = require('../controllers/enquiryController');

const router = express.Router();

// Route to create a new enquiry
router.post('/enquiries', createEnquiry);

// Route to fetch all enquiries
router.get('/enquiries', getAllEnquiries);

module.exports = router;
