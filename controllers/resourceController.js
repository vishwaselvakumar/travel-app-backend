const Resource = require("../models/resourceSchema"); // Adjust path if needed

// Create a new resource
exports.createResource = async (req, res) => {
  try {
    const resource = new Resource(req.body);
    await resource.save();
    res.status(201).json({ success: true, data: resource });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all resources
exports.getResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json({ success: true, data: resources });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single resource by ID
exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ success: false, message: "Resource not found" });
    }
    res.status(200).json({ success: true, data: resource });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a resource by ID
exports.updateResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators
    });
    if (!resource) {
      return res.status(404).json({ success: false, message: "Resource not found" });
    }
    res.status(200).json({ success: true, data: resource });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a resource by ID
exports.deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) {
      return res.status(404).json({ success: false, message: "Resource not found" });
    }
    res.status(200).json({ success: true, message: "Resource deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
