import mongoose from "mongoose";

const usersSchema= new mongoose.Schema({
    Name:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true}
})
const users=mongoose.model('users',usersSchema)
export default users