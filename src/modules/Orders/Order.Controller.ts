import { Request, Response } from "express";
import { OrderServices } from "./Order.Services";

const createOrder = async (req: Request, res: Response) => {
  const order = req.body;
  const result = await OrderServices.createOrderIntoDB(order);
  try {
    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create order",
      error: error,
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
