import AsyncHandler from "express-async-handler";
import users from "../models/users.model.js";
const message=AsyncHandler( async (req,res) => {
    const {Name,email,message}=req.body
    if (!Name||!message||!email) {
        return res.status(400).json({message:"please enter a name, message or email"})
    }
    const messageinfo=await users.create({Name,email,message})
    res.status(200).json(messageinfo)
})
export default message

