import express from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/",getAllNotes);
router.get("/:id",getNoteById);

router.post("/",createNote);

router.put("/:id",updateNote);

router.delete("/:id",deleteNote);

export default router; 













//EYjNb07ZSfqh6XEo

//mongodb+srv://kpvishnu10987:EYjNb07ZSfqh6XEo@cluster0.vyhjr7r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0