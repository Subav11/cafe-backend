import express from "express";
const Router = express.Router();
import {
    displayProducts,
    showProducts,
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js"

//user routes
Router.get("/all", displayProducts)

//admin routes
Router.get("/", showProducts);
Router.post("/", addProduct);
Router.post("/:id", getProduct)
Router.patch("/:id", updateProduct);
Router.delete("/:id", deleteProduct);

export default Router;
