import { z } from "zod";

// Define the Zod schema for Order
const OrderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.string().min(1),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

export default OrderValidationSchema;
