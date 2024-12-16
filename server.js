const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const resourceRoutes = require("./routes/resourceRoutes"); 
const enquiryRoutes = require('./routes/enquiryRoutes');
const countryRoutes = require("./routes/countries");
const hotelRoutes = require("./routes/hotelRoutes")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/countries", countryRoutes);
app.use('/api', enquiryRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/hotels", hotelRoutes);


// Database Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.error(err));
