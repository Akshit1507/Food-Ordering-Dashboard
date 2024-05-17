// routes/orders.js

import express from "express";
import { getAllOrders } from "../controllers/ordersController.js";

const router = express.Router();

// GET /api/orders
router.get("/", getAllOrders);

export default router;
