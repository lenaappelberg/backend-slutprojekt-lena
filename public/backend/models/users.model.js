import mongoose from "mongoose";

const usersSchema= new mongoose.Schema({
    id:String,
    email:String,
    password:String
})
const users=mongoose.model('users',usersSchema)
export default users