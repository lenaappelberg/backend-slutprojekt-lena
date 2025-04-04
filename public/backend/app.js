import express from "express";
import router from "./router/product.router.js"; 
const app=express();
app.use(express.json());
app.use('/estore/product',router)
export default app;           