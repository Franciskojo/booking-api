import { booking } from "../models/booking-models.js";

// Writing function for our booking api
export const getAllBookings = (req, res,) => {
res.status(200).json("These are all booking")
}

export const getOneBooking = (req, res,) => {
    res.status(200).json("This is one booking");
}

export const postBookings = async (req, res) => {
    const newBooking = new booking(req.body)

    const bookings = await newBooking.save()



    res.status(201).json (bookings)
}

export const updateBookings = (req, res) => {
res.status(200).json("Book was updated")
}

export const deleteBookings = (req,res) => {
res.status(200).json("Book was deleted")
}