import Products from "../models/product.model.js";
import asyncHandler from "express-async-handler"
 const createProduct=asyncHandler( async (req,res) => {
    const {id,Name}=req.body
    const productItem= await Products.create({id,Name})
    res.status(201).json(productItem)
    console.log(req.body)
})
export default createProduct