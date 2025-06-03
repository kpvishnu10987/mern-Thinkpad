import express from "express";
import cors from "cors";
import dotenv from "dotenv"
// const express = require("express")
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/ratelimiter.js"  /////filename?


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

app.use(cors({
    origin : "http://localhost:5173",
}

));
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes",notesRoutes);

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`server running on PORT:${PORT}`);
});  
});
