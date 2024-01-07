import { userModel } from "../../../DB/models/user.model.js";
import bcrypt from"bcrypt";
import jwt from "jsonwebtoken"; 
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utils/AppError.js";

export const signUp = catchError(
    async(req,res)=>{
        await userModel.insertMany(req.body); 
        res.json({message:"success"})
    }
)

export const signIn = catchError(
    async(req,res,next)=>{
        let user = await userModel.findOne({email: req.body.email});
        if(user && bcrypt.compareSync(req.body.password,user.password)){
            let token = jwt.sign({userID: user._id,role: user.role},process.env.JWT_KEY)
            return res.json({message:"success",token})
        }
        next(new AppError("incorrect email or password",401))
    }
)