import express from "express";
import { OrderController } from "./Order.Controller";
const router = express.Router();

router.post("/", OrderController.createOrder);
router.get("/", OrderController.getAllOrders);

export const OrderRoutes = router;
