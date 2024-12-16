const Country = require("../models/Country");

// Get all countries
exports.getCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new country
exports.createCountry = async (req, res) => {
  try {
    const { name, description } = req.body;
    const cardImage = req.file ? `http://localhost:5000/uploads/${req.file.filename}` : null;
    const country = new Country({ name, description, cardImage, images: [] });
    await country.save();
    res.status(201).json(country);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a country
exports.updateCountry = async (req, res) => {
  try {
    const { name, description } = req.body;
    const country = await Country.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
    res.json(country);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Upload images for a country's detail page
exports.uploadImages = async (req, res) => {
  try {
    const country = await Country.findById(req.params.id);
    req.files.forEach((file) => {
      country.images.push(`http://localhost:5000/uploads/${file.filename}`);
    });
    await country.save();
    res.json(country);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
