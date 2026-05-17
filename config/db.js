import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()
const url = process.env.DB_URL;

export const connectDB = async () =>{
    try {
        await mongoose.connect(url)
        console.log("Database connected successfully")
    } catch (error) {
        console.error("MongoDB connection failed")
    }
}