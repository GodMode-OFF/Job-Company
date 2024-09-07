import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connect } from "mongoose";
import connectDB from "./utils/db.js";
// import { JsonWebTokenError } from "jsonwebtoken";
dotenv.config({});


const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:1234',
    credentials: true
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    connectDB();
    console.log("Listening..");
})

app.get('/home', (req, res)=>{
    res.send("Welcome to home page")
})














