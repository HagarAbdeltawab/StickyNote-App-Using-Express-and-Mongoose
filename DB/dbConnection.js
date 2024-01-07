import mongoose from "mongoose";

export function dbConnection(){
    mongoose.connect('mongodb://127.0.0.1:27017/mongoDB2').then(()=>{
        console.log("DB Connected");
    }).catch((err)=>{
        console.log("DB Error",err);
    })
}
