import express from "express";
import { signup, login } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// router.post("/register", register);
router.post("/signup", signup);
router.post("/login", login);


export default router;

