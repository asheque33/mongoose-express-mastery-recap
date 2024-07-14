import { IProduct } from "./product.interface";
import ProductModel from "./product.model";

const createProductIntoDB = async (payLaod: IProduct) => {
  const result = await ProductModel.create(payLaod);
  return result;
};
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
const getProductFromDB = async (_id: string) => {
  const result = await ProductModel.findById(_id);
  return result;
};
const updateProductInDB = async (_id: string, existedProduct: IProduct) => {
  const result = await ProductModel.findByIdAndUpdate(_id, existedProduct);
  return result;
};
const deleteProductFromDB = async (_id: string) => {
  const result = await ProductModel.findByIdAndDelete(_id);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
};
