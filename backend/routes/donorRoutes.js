import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createDonor,
  getDonors,
  getDonorById,
  updateDonor,
  deleteDonor,
} from "../controllers/donorController.js";

const router = express.Router();

router.post("/", protect, createDonor);
router.delete("/:id", protect, deleteDonor);

router.post("/", createDonor);
router.get("/", getDonors);
router.get("/:id", getDonorById);
router.put("/:id", updateDonor);
router.delete("/:id", deleteDonor);

export default router;
