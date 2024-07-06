import { IProduct } from "./product.interface";
import ProductModel from "./product.model";

const createProductIntoDB = async (payLaod: IProduct) => {
  const result = await ProductModel.create(payLaod);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
