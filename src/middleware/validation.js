import { AppError } from "../utils/AppError.js";

export const validation=(schema)=>{
    return(req,res,next)=>{
        const {error} = schema.validate({...req.body,...req.query,...req.params,...req.header},{abortEarly: false})
        if(!error){
            next();
        }else{
            let errMessage = [];
            error.details.forEach(value=>{
                errMessage.push(value.message)
            })
            next(new AppError(errMessage,401))
        }
    }
} 