import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import { bookingRouter } from "./routes/all-routes.js";

// create database

// Create a booking app
const bookingapp = express();


//  routeuses
bookingapp.use(cors())
bookingapp.use(express.json())
bookingapp.use(bookingRouter);


await mongoose.connect(process.env.MONGO_URL)

// listen for incoming request
const PORT = 7000
bookingapp.listen( PORT, () => console.log(`Server is listening on ${PORT}`))