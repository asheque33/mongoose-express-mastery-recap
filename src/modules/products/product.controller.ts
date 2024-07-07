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
const getAllProducts = async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProductsFromDB();
  res.json({
    success: true,
    message: "All Products are retrieved successfully",
    data: result,
  });
};
const getProductById = async (req: Request, res: Response) => {
  const id = req.params.productId;
  const result = await ProductServices.getProductFromDB(id);
  res.json({
    success: true,
    message: "Product is retrieved successfully",
    data: result,
  });
};
export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
};
