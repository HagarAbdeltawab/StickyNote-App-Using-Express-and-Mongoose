import { dbConnection } from "../DB/dbConnection.js"
import { globalError } from "./middleware/globalError.js";
import noteRouter from "./modules/notes/note.routes.js"
import userRouter from "./modules/users/user.routes.js"
import { AppError } from "./utils/AppError.js";

export function initApp(app,express){
    dbConnection();
    app.use(express.json());
    app.use(userRouter);
    app.use(noteRouter);
    app.all('*',(req,res,next)=>{
        next(new AppError(`Not Found ${req.originalUrl},404)`));
    })
    app.use(globalError);
}