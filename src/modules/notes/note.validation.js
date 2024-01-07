import Joi from "joi";

export const addNoteSchemaVal = Joi.object({
    title: Joi.string().min(2).max(20).required(),
    desc: Joi.string().min(2).max(200).required()
}) 

export const updateNoteSchemaVal = Joi.object({
    title: Joi.string().min(2).max(20).required(),
    desc: Joi.string().min(2).max(200).required(),
    id: Joi.string().hex().length(24).required()
})

export const deleteNoteSchemaVal = Joi.object({
    id: Joi.string().hex().length(24).required()
})