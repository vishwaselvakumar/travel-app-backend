const Hotel = require('../models/Hotel');

// Add a new hotel
const addHotel = async (req, res) => {
  try {
    const images = req.files.map(file => file.path);
    const { name, description, price } = req.body;

    const newHotel = new Hotel({ name, description, price, images });
    await newHotel.save();

    res.status(201).json({ message: 'Hotel added successfully', hotel: newHotel });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add hotel' });
  }
};

// Fetch all hotels
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hotels' });
  }
};

// Fetch a hotel by ID
const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ error: 'Hotel not found' });
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hotel' });
  }
};

// Update a hotel
const updateHotel = async (req, res) => {
  try {
    const images = req.files.map(file => file.path);
    const { name, description, price } = req.body;

    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { name, description, price, images },
      { new: true }
    );

    if (!updatedHotel) return res.status(404).json({ error: 'Hotel not found' });
    res.status(200).json({ message: 'Hotel updated successfully', hotel: updatedHotel });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update hotel' });
  }
};

// Delete a hotel
const deleteHotel = async (req, res) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!deletedHotel) return res.status(404).json({ error: 'Hotel not found' });
    res.status(200).json({ message: 'Hotel deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete hotel' });
  }
};

module.exports = { addHotel, getHotels, getHotelById, updateHotel, deleteHotel };
