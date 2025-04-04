import mongoose from "mongoose";
const orderProductschema= new mongoose.Schema({
    productId:String,
    quantity:String
})
const orderProducts=mongoose.model('orderProducts',orderProductschema)

export default orderProducts