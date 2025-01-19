// const express = require("express");
import express from "express"
// const dotenv = require("dotenv")
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js"

// const app = express();
dotenv.config()

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())

// app.get("/", (req,res)=>{
//     // root route
//     res.send("Hello World!")
// })

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server Running on port ${PORT}`)
})
