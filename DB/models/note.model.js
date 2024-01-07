import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: String,
    desc: String,
    createdBy: { 
        type:mongoose.Types.ObjectId,
        ref:'user'
    }
},{timestamps: true})

export const noteModel = mongoose.model('note',schema)