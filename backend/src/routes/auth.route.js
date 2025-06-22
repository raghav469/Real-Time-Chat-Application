import express from "express";
import {
  checkAuth,
  login,
  logout,
  signup,
  updateProfile,
  deleteAccount // ✅ make sure this is imported
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.delete("/delete-account", protectRoute, deleteAccount); // ✅ delete route
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, checkAuth);

export default router;
