import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    hospital: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    urgency: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "High",
    },
    contactNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Request", requestSchema);
