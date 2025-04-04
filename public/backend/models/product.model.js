import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    id:String,
    Name:String,
    category:String,
    description:String,
    price:Number,
    images:String
})

const Products=mongoose.model('Products',productSchema)

export default Products