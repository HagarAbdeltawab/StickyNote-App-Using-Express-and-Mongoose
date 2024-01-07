import { noteModel } from "../../../DB/models/note.model.js";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utils/AppError.js";

export const addNote = catchError(
    async(req,res)=>{
        const {title,desc} = req.body;
        const id = req.user.userID;
        await noteModel.insertMany({title,desc,createdBy:id});
        res.json({message:"success"});
    }
)

export const allNotes = catchError(
    async(req,res)=>{
        let notes = await noteModel.find({createdBy: req.user.userID});
        res.json({message:"success",notes})
    }
)

export const updateNote = catchError(
    async(req,res)=>{
        const {title,desc} = req.body; 
        await noteModel.findByIdAndUpdate( req.params.id, {title,desc});
        res.json({message:"success"})
    }
)

export const deleteNote = catchError(
    async(req,res)=>{
        const id = req.user.userID;
        let note = await noteModel.findByIdAndDelete(req.params.id);
        if(!note) return next(new AppError("note not found",401))
        res.json({message:"success"})
    }
)
