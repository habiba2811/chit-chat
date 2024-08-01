import express from "express";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express(); 
const PORT =process.env.PORT || 5000; 

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes); 
app.use("/api/messages",messageRoutes); 


app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`server running on port ${PORT}`)});