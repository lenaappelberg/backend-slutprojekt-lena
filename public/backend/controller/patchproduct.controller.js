import AsyncHandler from "express-async-handler";
import Products from "../models/product.model.js";
import mongoose from "mongoose";
const patchProduct = AsyncHandler( async (req,res) => {
    const {id}=req.params
    const {Name,category,description,price,images}=req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({message:"invalid id"})
    }
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "No changes provided" });
    }
    const toUpdate={}
    if(Name) toUpdate.Name=Name
    if(category) toUpdate.category=category
    if(description) toUpdate.description=description
    if(price) toUpdate.price=price
    if(images) toUpdate.images=images
    if (Object.keys(toUpdate).length===0) {
        res.status(400).json({message:"no changes provided"})
    }
    const updatedproduct=await Products.findByIdAndUpdate(id,toUpdate,{new:true})
    if (!updatedproduct) {
        return res.status(404).json({message:"can't find that product"})
    }
    res.status(200).json(updatedproduct)
})
export default patchProduct