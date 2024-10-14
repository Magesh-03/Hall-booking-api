const express   = require(express);
const router = express.Router();
const roomsModel = require('../models/rooms.js');



router.post('/', (req, res) => {
    res.json({message: "Room created successfully"});  //Logic for create room
});



router.get('/', (req, res)=>{
    res.json(roomsWithBookings);
});

module.exports = router;