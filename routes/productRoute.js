import express from "express";
const Router = express.Router();
import {
    addProduct,
    showProducts,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js"

//admin routes
Router.post("/addProduct", addProduct);
Router.get("/showProducts", showProducts);
Router.patch("/:id", updateProduct);
Router.delete("/:id", deleteProduct);

export default Router;
