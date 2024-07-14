import { z } from "zod";

// Define the Zod schema for Variant
const VariantSchema = z.object({
  type: z.string().min(1),
  value: z.string().min(1),
});

// Define the Zod schema for Inventory
const InventorySchema = z.object({
  quantity: z.number().int().positive(),
  inStock: z.boolean(),
});

// Define the Zod schema for Product
const ProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().positive(),
  category: z.string().min(1),
  tags: z.array(z.string().min(1)),
  variants: z.array(VariantSchema),
  inventory: InventorySchema,
});
export default ProductSchema;
