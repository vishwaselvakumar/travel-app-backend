const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getCountries,
  createCountry,
  updateCountry,
  uploadImages,
} = require("../controllers/countryController");

// Configure file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Routes
router.get("/", getCountries);
router.post("/", upload.single("cardImage"), createCountry);
router.put("/:id", updateCountry);
router.post("/:id/detail-images", upload.array("images", 11), uploadImages);

module.exports = router;
