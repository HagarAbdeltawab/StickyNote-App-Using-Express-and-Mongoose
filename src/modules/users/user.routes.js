import express from "express";
import { signUp, signIn } from "./user.controller.js";
import { checkEmail } from "../../middleware/checkEmail.js";
import { hashPassword } from "../../middleware/hashPassword.js";
import { validation } from "../../middleware/validation.js";
import { signInSchemaVal, signUpSchemaVal } from "./user.validation.js";
const userRouter = express.Router();

userRouter.post('/signUp',validation(signUpSchemaVal),checkEmail,hashPassword,signUp)
userRouter.post('/signIn',validation(signInSchemaVal),signIn)

export default userRouter;