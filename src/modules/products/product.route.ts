import express from "express";
const router = express.Router();
import { ProductController } from "./product.controller";

router.post("/", ProductController.createProduct);

export const productsRouter = router;
