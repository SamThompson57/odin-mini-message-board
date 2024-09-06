const express = require('express');
const router = express.Router();
const message_controller = require("../controllers/messageController")

// GET user Listing
router.get('/:id', message_controller.details)

module.exports = router;