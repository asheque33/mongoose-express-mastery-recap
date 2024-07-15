import express from "express";
const router = express.Router();
import { ProductController } from "./product.controller";

router.post("/", ProductController.createProduct);
router.get("/:productId", ProductController.getProductById);
router.get("/", ProductController.getAllProducts);
router.put("/:productId", ProductController.updateProductById);
router.delete("/:productId", ProductController.deleteProductById);

export const ProductRoutes = router;
