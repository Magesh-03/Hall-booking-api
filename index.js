const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let rooms = [];
let bookings = [];

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


app.post('/rooms', (req, res) => {
    const { numberOfSeats, amenities, pricePerHour } = req.body;

    const newRoom = {
        id: rooms.length + 1,
        numberOfSeats,
        amenities,
        pricePerHour,
        bookings: []
    };

    rooms.push(newRoom);
    res.status(201).json(newRoom);
});

app.post('/bookings', (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;
    const room = rooms.find(room => room.id === roomId);

    if (!room) {
        return res.status(404).json({ error: 'Room not found' });
    }

    const isBooked = room.bookings.some(booking => 
        booking.date === date && (
            (startTime >= booking.startTime && startTime < booking.endTime) || 
            (endTime > booking.startTime && endTime <= booking.endTime)
        )
    );

    if (isBooked) {
        return res.status(400).json({ error: "Room is already booked for the selected time" });
    }

    const newBooking = {
        id: bookings.length + 1,
        customerName,
        date,
        startTime,
        endTime,
        roomId,
    };

    room.bookings.push(newBooking);
    bookings.push(newBooking);
    res.status(201).json(newBooking);
});


app.get('/rooms', (req, res) => {
    const result = rooms.map(room => ({
        roomName: `Room ${room.id}`,
        bookedStatus: room.bookings.length > 0,
        bookings: room.bookings,
    }));

    res.json(result);
});


app.get('/customers', (req, res) => {
    const customers = bookings.map(booking => ({
        customerName: booking.customerName,
        roomName: `Room ${booking.roomId}`,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
    }));

    res.json(customers);
});

app.get('/customers/:customerName', (req, res) => {
    const { customerName } = req.params;
    const customerBookings = bookings.filter(booking => booking.customerName === customerName);

    const result = customerBookings.map(booking => ({
        customerName: booking.customerName,
        roomName: `Room ${booking.roomId}`,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
        bookingId: booking.id,
        bookingStatus: "Booked"
    }));

    res.json(result);
});



