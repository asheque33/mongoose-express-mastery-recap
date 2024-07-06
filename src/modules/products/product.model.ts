import { Schema, model } from "mongoose";
import { IProduct, TInventory, TVariant } from "./product.interface";

// Define the Variant Schema
const VariantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});
const InventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// Define the Product Schema
const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [VariantSchema], required: true },
  inventory: { type: InventorySchema, required: true },
});

// Create the Product model
const ProductModel = model<IProduct>("ProductModel", ProductSchema);

export default ProductModel;
