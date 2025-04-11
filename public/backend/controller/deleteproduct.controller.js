import AsyncHandler from "express-async-handler";
import Products from "../models/product.model.js";
import mongoose from "mongoose";
const deleteProduct=AsyncHandler( async (req,res) => {
    const {id}=req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({message:"invalid"})
    }
    const product=await Products.findByIdAndDelete(id).exec()
    if (!product) {
        return res.status(404).json({message:`Can't find this`})
    }
    res.sendStatus(200)
})
export default deleteProduct