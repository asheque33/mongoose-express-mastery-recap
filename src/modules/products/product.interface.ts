export type TVariant = {
  type: string;
  value: string;
};
export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: TInventory;
}
