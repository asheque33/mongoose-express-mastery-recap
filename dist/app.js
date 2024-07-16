"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./modules/products/product.route");
const Order_Routes_1 = require("./modules/Orders/Order.Routes");
const app = (0, express_1.default)();
// Parse JSON bodies (as sent by API clients)
app.use(express_1.default.json());
// Application routes
app.use("/api/products", product_route_1.ProductRoutes);
app.use("/api/orders", Order_Routes_1.OrderRoutes);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
