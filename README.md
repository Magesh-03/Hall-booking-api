# Hall Booking Application

This is a simple Node.js application for managing room bookings. The application allows you to create rooms, book them, and view booking details for each room and customer.

## Features

- **Create Rooms:**
- - **Book Rooms:**
- **View Room Status:**.
- **Customer Booking Details:*

## Technologies Used

- **Node.js**
- **Express.js**
- **body-parser**

To start the server is node index.js
The server will run on http://localhost:3000.

## API Endpoints
**Create a Room**
URL: /rooms

Method: POST

Description:
numberOfSeats (Number)
amenities (Array
pricePerHour (Number)


**Book a Room**
URL: /bookings

Method: POST



customerName (String)
date (String)
startTime (String)
endTime (String)
roomId (Number)
the details of the booking.

**List All Rooms with Booking Data**
URL: /rooms
Method: GET


**List All Customers with Booking Data**
URL: /customers

Method: GET



**List Bookings for a Specific Customer**
URL: /customers/:customerName

Method: GET


customerName (String): Name of the customer whose bookings are to be retrieved.
