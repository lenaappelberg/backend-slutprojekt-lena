import AsyncHandler from "express-async-handler";
import Products from "../models/product.model.js";
const getProduct=AsyncHandler( async (req,res) => {
const products= await Products.find() 
if (!products) {
    res.status(400).json({message:"can not find products"})
}
res.status(200).json(products)
})
export default getProduct