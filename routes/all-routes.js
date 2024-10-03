import express, { Router } from "express";
import { deleteBookings, getAllBookings, getOneBooking, postBookings, updateBookings } from "../controllers/booking-controllers.js";


export const bookingRouter = Router();

bookingRouter.get("/bookings", getAllBookings);

bookingRouter.get("/bookings/:id", getOneBooking);

bookingRouter.post("/bookings", postBookings);

bookingRouter.patch("/bookings/:id", updateBookings);

bookingRouter.delete("/bookings/:id", deleteBookings);
