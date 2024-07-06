import { Request, Response } from "express";
import { ProductServices } from "./product.service";
const createProduct = async (req: Request, res: Response) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  res.json({
    success: true,
    message: "Product is created successfully",
    data: result,
  });
};
export const ProductController = {
  createProduct,
};
