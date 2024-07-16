import { IOrder } from "./Order.Interface";
import { OrderModel } from "./Order.Model";

const createOrderIntoDB = async (payload: IOrder) => {
  const result = await OrderModel.create(payload);
  return result;
};
const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};
const getOrdersByEmailFromDB = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getOrdersByEmailFromDB,
};
