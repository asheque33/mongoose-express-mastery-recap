import express, { Request, Response } from "express";
import { productsRouter } from "./modules/products/product.route";
const app = express();
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// Application routes
app.use("/api/products", productsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
export default app;
