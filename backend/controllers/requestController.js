import Request from "../models/Request.js";

// CREATE request
export const createRequest = async (req, res) => {
  try {
    const request = await Request.create(req.body);
    res.status(201).json(request);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ all requests
export const getRequests = async (req, res) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE request
export const deleteRequest = async (req, res) => {
  try {
    await Request.findByIdAndDelete(req.params.id);
    res.json({ message: "Request removed" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

