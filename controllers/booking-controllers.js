import { booking } from "../models/booking-models.js";

// Writing function for our booking api
export const getAllBookings = (req, res,) => {
res.status(200).json("These are all booking")
}

export const getOneBooking = (req, res,) => {
    res.status(200).json("This is one booking");
}

export const postBookings = async (req, res, next) => {
    const newBooking = new booking()



    const bookings = await newBooking.save(req.body)



    try {
        res.status(201).json (bookings)
    } catch (error) {
       next(error) 
    }
}

export const updateBookings = (req, res) => {
res.status(200).json("Book was updated")
}

export const deleteBookings = (req,res) => {
res.status(200).json("Book was deleted")
}