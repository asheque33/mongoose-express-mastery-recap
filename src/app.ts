import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/products/product.route";
import { OrderRoutes } from "./modules/Orders/Order.Routes";
import notFound from "./middlewares/NotFound";

const app = express();
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// Application routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);
// middleware
app.use(notFound);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
export default app;
