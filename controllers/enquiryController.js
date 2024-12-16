const Enquiry = require('../models/Enquiry');

// Controller to handle POST request (add a new enquiry)
const createEnquiry = async (req, res) => {
  try {
    const { name, mobileNumber, country } = req.body;

    if (!name || !mobileNumber || !country) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    const newEnquiry = await Enquiry.create({ name, mobileNumber, country });
    return res.status(201).json({
      message: 'Enquiry added successfully!',
      enquiry: {
        id: newEnquiry._id,
        name: newEnquiry.name,
        mobileNumber: newEnquiry.mobileNumber,
        country: newEnquiry.country,
        createdAt: newEnquiry.createdAt, // Include formatted date and time
      },
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
};

// Controller to handle GET request (fetch all enquiries)
const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }); // Sort by most recent
    return res.status(200).json({ enquiries });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
};

module.exports = { createEnquiry, getAllEnquiries };
