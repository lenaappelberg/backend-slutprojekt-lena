import mongoose from "mongoose";
import Products from "../models/product.model.js";
import AsyncHandler from "express-async-handler";
const getindProduct=AsyncHandler( async (req,res) => {
const {id}=req.params 
if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({message:"invalid id"})
}
const product=await Products.findById(id).exec()
if (!product) {
    res.status(400).json({message:"can not find product"})
}
})
export default getindProduct
