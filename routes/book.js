const express = require('express');
const router = express.router();
const bookingsModel = require('../models/booking.js');
const roomsModel = require('../models/rooms.js');



router.post('/', (req, res)=>{
    res.json({message: "Room booked Successfully"});
});



router.get('/customers', (req, res)=>{
    res.json(customerWithBookings);
});



router.get('/customers/:customerId/bookings', (req, res) => {
    res.json(customerBookings);
});

module.exports = router;