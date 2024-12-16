const express = require('express');
const multer = require('multer');
const {
  addHotel,
  getHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
} = require('../controllers/hotelController');

const router = express.Router();

// Multer configuration for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/hotels');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routes
router.post('/', upload.array('images', 5), addHotel);
router.get('/', getHotels);
router.get('/:id', getHotelById);
router.put('/:id', upload.array('images', 5), updateHotel);
router.delete('/:id', deleteHotel);

module.exports = router;
