import express from "express";
import { OrderController } from "./Order.Controller";
const router = express.Router();

router.post("/", OrderController.createOrder);

export const OrderRoutes = router;
