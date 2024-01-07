import Joi from "joi";

export const signUpSchemaVal = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Z][a-z0-9#@]{8,40}$/),
    rePassword: Joi.valid(Joi.ref('password')).required()
})

export const signInSchemaVal = Joi.object({ 
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[A-Z][a-z0-9#@]{8,40}$/).required()
})
