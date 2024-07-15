import { Request, Response } from "express";
import { OrderServices } from "./Order.Services";

const createOrder = async (req: Request, res: Response) => {
  const order = req.body;
  const result = await OrderServices.createOrderIntoDB(order);
  try {
    // await order.save();
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
export const OrderController = {
  createOrder,
};
