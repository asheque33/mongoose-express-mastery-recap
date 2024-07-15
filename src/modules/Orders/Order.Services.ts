import { IOrder } from "./Order.Interface";
import { OrderModel } from "./Order.Model";

const createOrderIntoDB = async (payload: IOrder) => {
  const result = await OrderModel.create(payload);
  return result;
};
export const OrderServices = {
  createOrderIntoDB,
};
