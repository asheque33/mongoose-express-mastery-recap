/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import ProductValidationSchema from "./product.validation";
const createProduct = async (req: Request, res: Response) => {
  try {
    const zodParsedProductData = ProductValidationSchema.parse(req.body);
    const result = await ProductServices.createProductIntoDB(
      zodParsedProductData
    );
    res.json({
      success: true,
      message: "Product is created successfully",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.issues[0].message || "Product creation failed",
    });
  }
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
const updateProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const existedProduct = req.body;
    const zodUpdatedProductData = ProductValidationSchema.parse(existedProduct);
    const result = await ProductServices.updateProductInDB(
      id,
      zodUpdatedProductData
    );
    res.json({
      success: true,
      message: "Product is updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.issues[0].message || "Product update failed",
    });
  }
};
const deleteProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await ProductServices.deleteProductFromDB(productId);
  console.log(result);
  res.json({
    success: true,
    message: "Product is deleted successfully",
    data: null,
  });
};
const getProductsBySearch = async (req: Request, res: Response) => {
  const result = await ProductServices.getProductsBySearchFromDB(req.query);
  res.json({
    success: true,
    message: `Products matching search term ${req.query.searchTerm} fetched successfully!`,
    data: result,
  });
};
export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  getProductsBySearch,
};
