import Products from "../models/product.model.js";
import asyncHandler from "express-async-handler"
 const createProduct=asyncHandler( async (req,res) => {
    const {Name,category,description,price,images}=req.body
    const productItem= await Products.create({Name,category,description,price,images})
    if (!productItem) {
        res.status(400).json({message:"can not create product"})
    }
    res.status(201).json(productItem)
    console.log(req.body)
})
export default createProduct