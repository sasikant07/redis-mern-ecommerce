import express from "express";
import {
  checkoutSuccess,
  createCheckoutSession,
} from "../controllers/payment.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create-checkout-session", protectedRoute, createCheckoutSession);
router.post("/checkout-success", protectedRoute, checkoutSuccess);

export default router;
