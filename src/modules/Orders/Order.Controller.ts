import { Request, Response } from "express";
import { OrderServices } from "./Order.Services";
import OrderValidationSchema from "./Order.Validation";
import { Types } from "mongoose";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const zodParsedOrderData = OrderValidationSchema.parse(order);
    const orderDataWithObjectId = {
      ...zodParsedOrderData,
      productId: new Types.ObjectId(zodParsedOrderData.productId),
    };
    const result = await OrderServices.createOrderIntoDB(orderDataWithObjectId);
    res.json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.issues[0].message || "Failed to create order",
    });
  }
};
const getAllOrders = async (req: Request, res: Response) => {
  const email = req.query.email as string;
  //   console.log(email, "email or not");
  if (email) {
    const result = await OrderServices.getOrdersByEmailFromDB(email);
    res.json({
      success: true,
      message: "Orders by email are retrieved successfully",
      data: result,
    });
  } else {
    const result = await OrderServices.getAllOrdersFromDB();
    res.json({
      success: true,
      message: "All Orders are retrieved successfully",
      data: result,
    });
  }
};
export const OrderController = {
  createOrder,
  getAllOrders,
};
