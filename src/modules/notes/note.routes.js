import express from "express";
import { addNote, allNotes, deleteNote, updateNote } from "./note.controller.js";
import { auth } from "../../middleware/auth.js";
import { addNoteSchemaVal, deleteNoteSchemaVal, updateNoteSchemaVal } from "./note.validation.js";
import { validation } from "../../middleware/validation.js";
const noteRouter = express.Router();
noteRouter.use(auth)
noteRouter.route('/notes').post(validation(addNoteSchemaVal),addNote).get(allNotes)
noteRouter.route('/notes/:id').put(validation(updateNoteSchemaVal),updateNote).delete(validation(deleteNoteSchemaVal),deleteNote)

export default noteRouter;