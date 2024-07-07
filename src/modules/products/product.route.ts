import express from "express";
const router = express.Router();
import { ProductController } from "./product.controller";

router.post("/", ProductController.createProduct);
router.get("/:productId", ProductController.getProductById);
router.get("/", ProductController.getAllProducts);

export const productsRouter = router;
