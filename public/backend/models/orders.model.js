import mongoose from "mongoose";
import orderProducts from "./orderProducts.model";
import users from "./users.model";
const ordersSchema= new mongoose.Schema({
    id:String,
    user:users,
    products:orderProducts
})
const orders=mongoose.model('orders',ordersSchema)
export default orders